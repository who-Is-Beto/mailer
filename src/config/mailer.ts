import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "whoisbeto@gmail.com", // generated ethereal user
    pass: "vramqpzfldkekuso" // generated ethereal password
  }
});

transporter.verify().then((): void => {
  console.log("Ready to send emails");
});
