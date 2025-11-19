import { ContactForm } from '@/components/contact-form';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Innovate Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
