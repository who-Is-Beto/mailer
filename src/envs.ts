const whoisbeto = process.env.WHO_IS_BETO;
const whoisbetoVercel = process.env.VERCEL_URL;

export const environment = {
  aviableDomains: [whoisbeto, whoisbetoVercel] as string[],
  port: process.env.PORT || 3000,
  whoIsBetoMail: process.env.WHO_IS_BETO_MAIL,
  mailHost: process.env.MAIL_HOST,
  mailPort: Number(process.env.MAIL_PORT) || 465,
  mailUser: process.env.MAIL_USERNAME,
  mailPass: process.env.MAIL_PASSWORD
};
