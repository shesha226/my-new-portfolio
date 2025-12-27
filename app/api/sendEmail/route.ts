'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
        status: 400,
      });
    }

    await resend.emails.send({
      from: 'Your Name <hello@yourportfolio.com>',
      to: 'chathurangashehan143@gmail.com',
      subject: `Message from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error('Resend Error:', err.message || err);
    return new Response(JSON.stringify({ success: false, error: err.message || err }), {
      status: 500,
    });
  }
}
