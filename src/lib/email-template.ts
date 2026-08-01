export type QuoteEmailData = {
  name: string;
  email: string;
  service?: string;
  message?: string;
  source?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

const COLORS = {
  background: "#08090b",
  surface: "#101114",
  surfaceRow: "#16171b",
  border: "#26272c",
  foreground: "#f5f5f7",
  muted: "#96979e",
  violet: "#7c5cfc",
  magenta: "#b56cf9",
  orange: "#ff8f6b",
};

const GRADIENT = `linear-gradient(120deg, ${COLORS.violet} 0%, ${COLORS.magenta} 45%, ${COLORS.orange} 100%)`;

function infoRow(label: string, value: string, isLast = false) {
  return `
    <tr>
      <td style="padding: 14px 0; ${isLast ? "" : `border-bottom: 1px solid ${COLORS.border};`}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="width: 120px; vertical-align: top; padding-right: 12px;">
              <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: ${COLORS.muted};">
                ${label}
              </span>
            </td>
            <td style="vertical-align: top;">
              <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: ${COLORS.foreground};">
                ${value}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function renderQuoteEmail({
  name,
  email,
  service,
  message,
  source,
}: QuoteEmailData) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSource = escapeHtml(source ?? "Sitio web");

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark light" />
    <meta name="supported-color-schemes" content="dark light" />
    <title>Nueva cotización — Wesplix Media</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${COLORS.background};">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
      Nueva solicitud de ${safeName}${service ? ` · ${escapeHtml(service)}` : ""} — revisa los detalles del proyecto.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${COLORS.background};">
      <tr>
        <td align="center" style="padding: 40px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 100%;">

            <tr>
              <td style="padding: 0 8px 20px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="width: 34px; height: 34px; border-radius: 9px; background: ${GRADIENT}; background-color: ${COLORS.violet};" align="center" valign="middle">
                      <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 700; color: #ffffff;">W</span>
                    </td>
                    <td style="padding-left: 10px;">
                      <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: ${COLORS.foreground};">
                        Wesplix Media
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="border-radius: 24px; overflow: hidden; background-color: ${COLORS.surface}; border: 1px solid ${COLORS.border};">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="height: 4px; line-height: 4px; font-size: 0; background: ${GRADIENT}; background-color: ${COLORS.violet};">&nbsp;</td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 32px 36px 8px 36px;">
                      <span style="display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${COLORS.magenta};">
                        Nueva cotización
                      </span>
                      <h1 style="margin: 10px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 22px; line-height: 1.35; font-weight: 600; letter-spacing: -0.01em; color: ${COLORS.foreground};">
                        ${safeName} quiere hablar de un proyecto
                      </h1>
                      <p style="margin: 8px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 13.5px; line-height: 1.6; color: ${COLORS.muted};">
                        Enviado desde ${safeSource}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 20px 36px 4px 36px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${COLORS.surfaceRow}; border: 1px solid ${COLORS.border}; border-radius: 16px;">
                        <tr>
                          <td style="padding: 6px 20px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                              ${infoRow("Nombre", safeName)}
                              ${infoRow(
                                "Correo",
                                `<a href="mailto:${safeEmail}" style="color: ${COLORS.foreground}; text-decoration: underline; text-decoration-color: ${COLORS.border};">${safeEmail}</a>`
                              )}
                              ${service ? infoRow("Servicio", escapeHtml(service), !message) : ""}
                              ${
                                message
                                  ? infoRow(
                                      "Proyecto",
                                      `<span style="display: block; margin-top: 2px;">${nl2br(message)}</span>`,
                                      true
                                    )
                                  : ""
                              }
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 28px 36px 36px 36px;" align="center">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="border-radius: 999px; background: ${GRADIENT}; background-color: ${COLORS.violet};">
                            <a href="mailto:${safeEmail}" style="display: inline-block; padding: 13px 28px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none;">
                              Responder a ${safeName.split(" ")[0]} &rarr;
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 24px 8px 0 8px;" align="center">
                <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: ${COLORS.muted};">
                  Wesplix Media · Notificación automática de tu sitio web
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
