// /api/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configura la clave de API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, address, message } = await req.json();

    // Define el mensaje de correo
    const msg = {
      from: {
        email: 'ayuda@blackmaps.com.ar',
        name: firstname + ' ' + lastname
      },
      personalizations: [
        {
          to: [
            {
              email: 'genaroelgenio@gmail.com'
            }
          ],
          dynamic_template_data: {
            firstname,
            lastname,
            address,
            message
          }
        }
      ],
      templateId: 'd-a6b5e17016d44b9abe8714f5c5242614'
    };

    // Envía el correo
    await sgMail.send(msg);
    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, error: 'Error al enviar el correo' }, { status: 500 });
  }
}
export async function GET() {
  return NextResponse.json({
    error: 405,
    message: 'No puedes usar GET en /api',
    author: 'GenaHost by GenaDev',
    linkedin: 'https://www.linkedin.com/in/genadev'
  }, { status: 405 });
}