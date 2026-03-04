import nodemailer from "nodemailer";

export async function POST(req) {

  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const userAgent = req.headers.get("user-agent");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "🚨 New Website Visitor",
    text: `
      Someone visited your website!

      Time: ${new Date()}
      IP: ${ip}
      Browser: ${userAgent}
    `,
  });

  return Response.json({ success: true });
}