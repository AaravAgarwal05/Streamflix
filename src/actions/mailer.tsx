import nodemailer from "nodemailer";
import connectDB from "@/db/connectDB";
import User from "@/models/user";
import { v4 as uuidv4 } from "uuid";

export const sendMail = async (email: string, emailType: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const token = uuidv4().replace(/-/g, "");
    user.verificationToken = token;
    user.verificationTokenExpires = new Date(Date.now() + 3600000);
    await user.save();

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const subject =
      emailType == "verify" ? "Email Verification" : "Password Reset";

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: subject,
      html: `
        <h1>Email Verification</h1>
        <p>Please click the link below to verify your email address.</p>
        <a href="${process.env.NEXT_PUBLIC_URL}signup/verifyemail?token=${token}">Verify Email</a>
        `,
    };
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error(error);
  }
};
