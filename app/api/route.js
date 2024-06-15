// /api/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configura la clave de API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, address, message } = await req.json();

    // Validación de campos requeridos
    if (!firstname || !lastname || !address || !message) {
      throw new Error('Faltan campos requeridos en la solicitud');
    }

    // Define el mensaje de correo
    const msg = {
      from: {
        email: 'ayuda@blackmaps.com.ar',
        name: `${firstname} ${lastname}`
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

    let errorMessage = 'Error al enviar el correo';
    let statusCode = 500;

    if (error.message.includes('Faltan campos requeridos')) {
      errorMessage = error.message;
      statusCode = 400; // Bad Request
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: statusCode });
  }
}
