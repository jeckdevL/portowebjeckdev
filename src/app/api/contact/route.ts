import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you can add logic for:
    // - Sending email using services like SendGrid, Mailgun, or nodemailer
    // - Saving to database
    // - Sending WhatsApp notifications
    
    // Example: Log to console (for development)
    console.log('Contact Form Submission:', { name, email, message });

    // For production, you can integrate with email services
    // Example with Formspree (free to start):
    // const formspreeRes = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message }),
    // });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}