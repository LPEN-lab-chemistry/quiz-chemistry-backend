import nodemailer from 'nodemailer';

export const nodemailerSender = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: { user: process.env.USER_EMAIL, pass: process.env.APP_PASSWORD },
});
