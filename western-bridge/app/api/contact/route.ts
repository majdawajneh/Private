import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  requestType?: string;
  country?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const requestType = clean(body.requestType);
    const country = clean(body.country);
    const subject = clean(body.subject);
    const message = clean(body.message);
    const website = clean(body.website);

    /*
     * Honeypot:
     * Real visitors never see this field.
     */
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    if (
      !name ||
      !email ||
      !requestType ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      name.length > 100 ||
      email.length > 160 ||
      phone.length > 40 ||
      country.length > 80 ||
      requestType.length > 80 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          message:
            "One or more fields are too long.",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error(
        "Contact email environment variables are not configured."
      );

      return NextResponse.json(
        {
          message:
            "Contact email is currently unavailable. Please try again later.",
        },
        {
          status: 503,
        }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeCountry = escapeHtml(country || "Not provided");
    const safeRequestType = escapeHtml(requestType);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />"
    );

    const { error } = await resend.emails.send({
      from: fromEmail,

      to: [toEmail],

      replyTo: email,

      subject: `[Western Bridge Website] ${requestType} — ${subject}`,

      text: `
New Western Bridge Website Inquiry

Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Country: ${country || "Not provided"}
Inquiry Type: ${requestType}
Subject: ${subject}

Message:
${message}
      `.trim(),

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            color: #152333;
          "
        >
          <div
            style="
              background: #0d3158;
              padding: 24px 28px;
              color: #ffffff;
            "
          >
            <div
              style="
                color: #dbc176;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 6px;
              "
            >
              Western Bridge Website
            </div>

            <h1
              style="
                margin: 0;
                font-size: 22px;
              "
            >
              New Inquiry
            </h1>
          </div>

          <div
            style="
              padding: 28px;
              border: 1px solid #e2e7ec;
              border-top: 0;
            "
          >
            <table
              style="
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 26px;
              "
            >
              <tr>
                <td style="padding: 8px 0; color: #7b8793;">
                  Name
                </td>

                <td
                  style="
                    padding: 8px 0;
                    font-weight: 700;
                    text-align: right;
                  "
                >
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; color: #7b8793;">
                  Email
                </td>

                <td
                  style="
                    padding: 8px 0;
                    font-weight: 700;
                    text-align: right;
                  "
                >
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; color: #7b8793;">
                  Phone / WhatsApp
                </td>

                <td
                  style="
                    padding: 8px 0;
                    font-weight: 700;
                    text-align: right;
                  "
                >
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; color: #7b8793;">
                  Country
                </td>

                <td
                  style="
                    padding: 8px 0;
                    font-weight: 700;
                    text-align: right;
                  "
                >
                  ${safeCountry}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; color: #7b8793;">
                  Inquiry Type
                </td>

                <td
                  style="
                    padding: 8px 0;
                    font-weight: 700;
                    text-align: right;
                  "
                >
                  ${safeRequestType}
                </td>
              </tr>
            </table>

            <div
              style="
                padding-top: 22px;
                border-top: 1px solid #e2e7ec;
              "
            >
              <div
                style="
                  color: #ad8937;
                  font-size: 11px;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  margin-bottom: 6px;
                "
              >
                Subject
              </div>

              <h2
                style="
                  margin: 0 0 18px;
                  color: #0d3158;
                  font-size: 18px;
                "
              >
                ${safeSubject}
              </h2>

              <div
                style="
                  color: #5f6c79;
                  line-height: 1.7;
                  font-size: 14px;
                "
              >
                ${safeMessage}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          message:
            "Your inquiry could not be sent. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}