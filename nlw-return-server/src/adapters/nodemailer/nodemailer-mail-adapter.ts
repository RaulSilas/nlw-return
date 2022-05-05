import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e16be4c75bcfba",
    pass: "b186997a397fe4",
  },
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Raul Silas <raulsilas22@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
