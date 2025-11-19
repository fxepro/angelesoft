'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be less than 100 characters.')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, apostrophes, and periods.'),
  email: z
    .string()
    .email('Please enter a valid email.')
    .max(255, 'Email must be less than 255 characters.')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(5000, 'Message must be less than 5000 characters.')
    .refine(
      (val) => {
        // Basic HTML tag detection - reject if contains HTML tags
        const htmlTagRegex = /<[^>]*>/g;
        return !htmlTagRegex.test(val);
      },
      { message: 'Message cannot contain HTML tags.' }
    ),
});

export async function submitContactForm(
  prevState: {
    message: string;
    errors?: Record<string, string[]>;
  } | null,
  formData: FormData
) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // In a real application, you would integrate an email service here.
    // e.g., using Resend, SendGrid, or Nodemailer.
    // TODO: Integrate email service (Resend, SendGrid, or Nodemailer)
    // Email would be sent to hello@angelesoft.com
    
    // Log server-side only (not exposed to client)
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Contact form submission:', {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        messageLength: validatedFields.data.message.length,
      });
    }

    return { message: 'Your message has been sent successfully!' };
  } catch (error) {
    // Log error server-side only
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Failed to process contact form:', error);
    }
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: {},
    };
  }
}
