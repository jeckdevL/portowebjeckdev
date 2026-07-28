import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    // Di sini Anda bisa menambahkan logika untuk:
    // - Mengirim email menggunakan layanan seperti SendGrid, Mailgun, atau nodemailer
    // - Menyimpan ke database
    // - Mengirim notifikasi ke WhatsApp
    
    // Contoh: Log ke console (untuk development)
    console.log('Contact Form Submission:', { name, email, message });

    // Untuk production, Anda bisa integrasikan dengan layanan email
    // Contoh dengan Formspree (gratis untuk memulai):
    // const formspreeRes = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, message }),
    // });

    return NextResponse.json(
      { success: true, message: 'Pesan berhasil dikirim!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}