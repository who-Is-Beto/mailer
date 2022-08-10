import nodemailer from "nodemailer";
import { environment } from "../envs";

// create reusable transporter object using the default SMTP transport

export const transporter = nodemailer.createTransport({
  host: environment.mailHost,
  port: environment.mailPort,
  secure: true, // true for 465, false for other ports
  auth: {
    user: environment.mailUser, // generated ethereal user
    pass: environment.mailPass // generated ethereal password
  }
});

transporter.verify().then((): void => {
  console.log("Ready to send emails");
});
