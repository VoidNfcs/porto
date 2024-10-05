import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const fromEmail = process.env.FROM_EMAIL as string;
const smtpUser = process.env.SMTP_USER as string;
const smtpPass = process.env.SMTP_PASS as string;

interface EmailRequestBody {
	email: string;
	subject?: string;
	message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
	try {
		const body: EmailRequestBody = await req.json();
		const { email, subject, message } = body;

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		const mailOptions = {
			from: fromEmail,
			to: email,
			subject: subject || 'No Subject',
			html: `
				<div style="font-family: Arial, sans-serif; margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
					<h1 style="color: #333;">${subject || 'No Subject'}</h1>
					<p style="font-size: 16px; line-height: 1.5; color: #555;">
						Thank you for reaching out!
					</p>
					<p style="font-size: 16px; line-height: 1.5; color: #555;">
						${message}
					</p>
					<p style="margin-top: 20px; font-size: 14px; color: #777;">
						Best regards,<br />
						Your Company Name
					</p>
				</div>
			`,
		};

		const info = await transporter.sendMail(mailOptions);

		return NextResponse.json({ messageId: info.messageId });
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : 'Internal server error';
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
