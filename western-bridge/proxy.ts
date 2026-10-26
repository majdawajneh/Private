import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware =
  createMiddleware(routing);

export default function proxy(
  request: NextRequest
) {
  const maintenanceMode =
    process.env.MAINTENANCE_MODE ===
    "true";

  if (maintenanceMode) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>
            Western Bridge | Maintenance
          </title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />

          <style>
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 30px;
              font-family:
                Arial,
                Helvetica,
                sans-serif;
              background:
                linear-gradient(
                  145deg,
                  #061c34 0%,
                  #0d3158 55%,
                  #123e6d 100%
                );
              color: white;
            }

            .page {
              width: 100%;
              max-width: 780px;
              text-align: center;
            }

            .logo {
              margin-bottom: 42px;
            }

            .brand {
              font-size: 15px;
              font-weight: 800;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              color: #d1b05b;
            }

            .line {
              width: 52px;
              height: 2px;
              margin: 22px auto 0;
              background: #c7a24a;
            }

            h1 {
              margin-bottom: 22px;
              font-size:
                clamp(
                  42px,
                  7vw,
                  78px
                );
              line-height: 1;
              letter-spacing: -0.045em;
            }

            .english {
              max-width: 620px;
              margin: 0 auto;
              font-size: 17px;
              line-height: 1.8;
              color:
                rgba(
                  255,
                  255,
                  255,
                  0.76
                );
            }

            .divider {
              width: 100%;
              max-width: 520px;
              height: 1px;
              margin: 38px auto;
              background:
                rgba(
                  255,
                  255,
                  255,
                  0.12
                );
            }

            .german {
              margin-bottom: 24px;
              font-size: 16px;
              line-height: 1.7;
              color:
                rgba(
                  255,
                  255,
                  255,
                  0.68
                );
            }

            .arabic {
              direction: rtl;
              font-size: 17px;
              line-height: 2;
              color:
                rgba(
                  255,
                  255,
                  255,
                  0.78
                );
            }

            .status {
              display: inline-flex;
              align-items: center;
              gap: 9px;
              margin-top: 44px;
              padding:
                10px 16px;
              border:
                1px solid
                rgba(
                  199,
                  162,
                  74,
                  0.35
                );
              border-radius: 100px;
              background:
                rgba(
                  255,
                  255,
                  255,
                  0.04
                );
              color: #d7bd79;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }

            .dot {
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #c7a24a;
              box-shadow:
                0 0 12px
                rgba(
                  199,
                  162,
                  74,
                  0.8
                );
            }

            footer {
              margin-top: 55px;
              font-size: 11px;
              color:
                rgba(
                  255,
                  255,
                  255,
                  0.38
                );
            }

            @media (
              max-width: 600px
            ) {
              body {
                padding: 22px;
              }

              .logo {
                margin-bottom: 32px;
              }

              .english,
              .arabic,
              .german {
                font-size: 15px;
              }

              .divider {
                margin:
                  30px auto;
              }
            }
          </style>
        </head>

        <body>
          <main class="page">
            <div class="logo">
              <div class="brand">
                Western Bridge
              </div>

              <div class="line"></div>
            </div>

            <h1>
              We'll be back soon.
            </h1>

            <p class="english">
              Western Bridge is currently
              undergoing scheduled maintenance
              and improvements. Our website
              will be available again shortly.
            </p>

            <div class="divider"></div>

            <p class="german">
              Unsere Website wird derzeit
              gewartet und optimiert.
              Western Bridge ist in Kürze
              wieder vollständig verfügbar.
            </p>

            <p class="arabic">
              نقوم حاليًا بإجراء أعمال صيانة
              وتطوير على موقع Western Bridge.
              سنعود قريبًا بنسخة محسّنة من
              الموقع.
            </p>

            <div class="status">
              <span class="dot"></span>
              Scheduled maintenance
            </div>

            <footer>
              © 2026 Western Bridge
            </footer>
          </main>
        </body>
      </html>
    `;

    return new NextResponse(
      html,
      {
        status: 503,

        headers: {
          "Content-Type":
            "text/html; charset=utf-8",

          "Retry-After":
            "86400",

          "Cache-Control":
            "no-store, no-cache, must-revalidate",
        },
      }
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher:
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};