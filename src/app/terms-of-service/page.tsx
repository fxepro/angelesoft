export const metadata = {
  title: 'Terms of Service | Angelesoft',
  description: 'Terms of Service for Angelesoft AI Innovation Hub',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Angelesoft AI Innovation Hub website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on Angelesoft's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Angelesoft at any time.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">3. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Angelesoft provides AI engineering, full-stack development, data intelligence, cloud infrastructure, AI experience design, and cognitive consulting services. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify or discontinue any service at any time</li>
              <li>Refuse service to anyone for any reason</li>
              <li>Change pricing or service terms with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">4. User Accounts and Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2">4.1 Account Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2">4.2 Acceptable Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful, offensive, or illegal content</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Use automated systems to access the Service without permission</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Angelesoft and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">6. AI-Powered Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may include AI-powered tools and services. When using these tools:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>You understand that AI-generated content may not always be accurate or complete</li>
              <li>You are responsible for verifying any information provided by AI tools</li>
              <li>You will not use AI tools for illegal or harmful purposes</li>
              <li>We reserve the right to monitor and moderate AI tool usage</li>
              <li>We are not liable for decisions made based on AI-generated content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">7. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The materials on Angelesoft's website are provided on an 'as is' basis. Angelesoft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Implied warranties or conditions of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property or other violation of rights</li>
              <li>Accuracy, likely results, or reliability of the use of the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">8. Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Angelesoft or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Angelesoft's website, even if Angelesoft or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Angelesoft and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">10. Links to Other Websites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Service may contain links to third-party websites or services that are not owned or controlled by Angelesoft. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Angelesoft shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Angelesoft operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@angelesoft.com" className="text-primary hover:underline">
                  hello@angelesoft.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

