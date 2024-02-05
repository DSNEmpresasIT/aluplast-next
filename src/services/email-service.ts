import { SendEmailDto } from "@/utils/types";
import { API_SERVICE } from "./api";

const CLIENT_ID = process.env.CLIENT_ID;

export async function sendEmail(body: SendEmailDto) {
  try {
    await API_SERVICE({
      method: 'POST',
      url: `/mailer/${CLIENT_ID}/send-email`,
      data: body
    })

    return 'Email Sended';
  } catch (error) {
    throw new Error();
  }
}