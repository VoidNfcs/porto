import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Mengambil variabel lingkungan (environment variables) untuk autentikasi SMTP
const smtpUser = process.env.SMTP_USER as string;
const smtpPass = process.env.SMTP_PASS as string;
const ownEmail = process.env.OWN_EMAIL as string;

// Tipe untuk request body dari email
interface EmailRequestBody {
	email: string;
	subject?: string;
	message: string;
}

// Fungsi handler untuk request POST
export async function POST(req: NextRequest): Promise<NextResponse> {
	try {
		// Parsing body dari request (mengambil data email, subject, dan message)
		const body: EmailRequestBody = await req.json();
		const { email, subject = 'No Subject', message } = body; // Default subject bila tidak ada

		// Validasi sederhana untuk memeriksa input
		if (!email || !message) {
			return NextResponse.json(
				{ error: 'Email and message fields are required.' },
				{ status: 400 } // Status 400 untuk Bad Request
			);
		}

		// Konfigurasi transporter untuk pengiriman email menggunakan Gmail
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		// Opsi email (pengirim, penerima, subject, dan isi email)
		const mailOptions = {
			from: `Website Contact Form <${email}>`, // Format yang lebih informatif
			to: ownEmail,
			subject: subject,
			html: `
				<div style="font-family: Arial, sans-serif; margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
					<h1 style="color: #333; font-size: 24px;">${subject}</h1>
					<p style="font-size: 16px; line-height: 1.5; color: #555;">${message}</p>
					<p style="font-size: 14px; color: #888;">Sender's email: ${email}</p>
				</div>
			`,
		};

		// Mengirim email dan menangkap informasi pengiriman
		const info = await transporter.sendMail(mailOptions);

		// Jika berhasil, kembalikan response dengan ID pesan
		return NextResponse.json({ messageId: info.messageId });
	} catch (error: unknown) {
		// Penanganan error dengan penjelasan lebih jelas
		const errorMessage =
			error instanceof Error
				? error.message
				: 'An unexpected error occurred';

		return NextResponse.json(
			{ error: errorMessage },
			{ status: 500 } // Status 500 untuk Internal Server Error
		);
	}
}
