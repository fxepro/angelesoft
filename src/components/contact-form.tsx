
'use client';

import { useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must be less than 100 characters.' })
    .regex(/^[a-zA-Z\s\-'\.]+$/, { message: 'Name can only contain letters, spaces, hyphens, apostrophes, and periods.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .max(255, { message: 'Email must be less than 255 characters.' })
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(5000, { message: 'Message must be less than 5000 characters.' })
    .refine(
      (val) => {
        // Basic HTML tag detection - reject if contains HTML tags
        const htmlTagRegex = /<[^>]*>/g;
        return !htmlTagRegex.test(val);
      },
      { message: 'Message cannot contain HTML tags.' }
    ),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.message) {
      if (state.errors) {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        action={formAction}
        onSubmit={form.handleSubmit(() =>
          formAction(new FormData(form.control._formValues.current))
        )}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you innovate?"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send className="mr-2" />
          )}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
