import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

export const sendWhatsappMessage = async (phone, order) => {
  try {

    await client.messages.create({
      from: fromNumber,
      to: `whatsapp:+91${phone}`,
      body: `
🛒 Order Confirmed!

Item: ${order.name}
Price: ₹${order.price}
Payment: ${order.paymentMethod}

Thank you for shopping!
      `,
    });

  } catch (error) {
    console.log("WhatsApp Error:", error.message);
  }
};