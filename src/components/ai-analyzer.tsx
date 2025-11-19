'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send, Bot } from 'lucide-react';
import { askAngelesoft } from '@/ai/flows/ask-angelesoft-flow';

export function AiAnalyzer() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Rate limiting: max 5 requests per minute
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    
    if (timeSinceLastSubmit < 60000 && submitCount >= 5) {
      setAnswer('Rate limit exceeded. Please wait a minute before asking another question.');
      return;
    }

    // Reset counter if more than a minute has passed
    if (timeSinceLastSubmit >= 60000) {
      setSubmitCount(0);
    }

    // Sanitize input - remove potential prompt injection attempts
    const sanitizedQuestion = question
      .trim()
      .slice(0, 1000) // Max 1000 characters
      .replace(/[<>]/g, ''); // Remove angle brackets

    if (!sanitizedQuestion || sanitizedQuestion.length < 3) {
      setAnswer('Please enter a valid question (at least 3 characters).');
      return;
    }

    setIsLoading(true);
    setAnswer('');
    setSubmitCount(prev => prev + 1);
    setLastSubmitTime(now);

    try {
      // Add timeout for AI calls (30 seconds)
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 30000);
      });

      const result = await Promise.race([
        askAngelesoft({ question: sanitizedQuestion }),
        timeoutPromise,
      ]) as { answer: string };

      setAnswer(result.answer);
    } catch (error) {
      // Log error server-side only (not exposed to client)
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Error asking AI:', error);
      }
      
      // Generic error message for users (no details exposed)
      const errorMessage = error instanceof Error && error.message === 'Request timeout'
        ? 'The request took too long. Please try again with a shorter question.'
        : 'Sorry, there was an error processing your question. Please try again later.';
      
      setAnswer(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Textarea
            placeholder="Ask a question about our services, capabilities, or how we can help your business..."
            value={question}
            onChange={(e) => {
              // Limit input to 1000 characters
              const value = e.target.value.slice(0, 1000);
              setQuestion(value);
            }}
            className="min-h-[120px] resize-none"
            disabled={isLoading}
            maxLength={1000}
          />
          {question.length > 0 && (
            <p className="text-xs text-muted-foreground text-right">
              {question.length}/1000 characters
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Thinking...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Ask AI
            </>
          )}
        </Button>
      </form>

      {answer && (
        <Card className="border-accent/50 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Bot className="h-5 w-5 text-primary" />
              AI Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {answer}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

