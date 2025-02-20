import { Resend } from "resend";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Verify authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validate request body
    const body = await request.json();
    const { email, roomId } = body;

    if (!email || !roomId) {
      return NextResponse.json(
        { error: "Email and roomId are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Collaborix.space <onboarding@resend.dev>",
      to: "nayankatiyara123@gmail.com", // During testing, only send to your email
      subject: "You've been invited to collaborate!",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h1 style="color: #333;">You've been invited to collaborate!</h1>
            <p>You have been invited to collaborate on a document in Collaborix.space.</p>
            <p>Click the button below to access the document:</p>
            <a 
              href="${process.env.NEXT_PUBLIC_APP_URL}/doc/${roomId}"
              style="
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                margin: 20px 0;
              "
            >
              Access Document
            </a>
            <p style="color: #666; font-size: 12px;">
              If you didn't expect this invitation, please ignore this email.
            </p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
