// /api/route.js
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configura la clave de API de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, address, message } = await req.json();

    // Validación de campos requeridos
    if (!firstname || !lastname || !address || !message) {
      throw new Error("Faltan campos requeridos en la solicitud");
    }

    // Define el mensaje de correo
    const msg = {
      from: {
        email: "ayuda@blackmaps.com.ar",
        name: `${firstname} ${lastname}`,
      },
      personalizations: [
        {
          to: [
            {
              email: "genaroelgenio@gmail.com",
            },
          ],
          dynamic_template_data: {
            firstname,
            lastname,
            address,
            message,
          },
        },
      ],
      templateId: "d-a6b5e17016d44b9abe8714f5c5242614",
    };

    // Envía el correo
    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Correo enviado exitosamente",
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);

    let errorMessage = "Error al enviar el correo";
    let statusCode = 500;

    if (error.message.includes("Faltan campos requeridos")) {
      errorMessage = error.message;
      statusCode = 400; // Bad Request
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: statusCode }
    );
  }
}

export async function GET() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Method not Allowed | Black Maps</title>
        <style>
          html, body {
            height: 100%;
            font-family: Segoe Ui;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: #000;
            color: white
          } 
          h1 {
            font-weight: bold;
          }
          h2 {
            font-weight: normal
          }
          span {
           background: linear-gradient(45deg,  #fdc4fd 0%,#fcf4e4 50%,#88fffc 100%,#88fffc 100%);
           font-weight: bold;
           background-clip: text;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
          }
          .badge {
            padding-inline: 8px;
            padding-block: 2px;
            background: rgb(255, 255, 255, .2);
            border-radius: 999px;
            border: 1px solid white;
          }
          a {
            transition: all .5s ease-in-out;
            &:hover {
              scale: 1.05;
              transition: all .5s ease-in-out;
            }
          }
        </style>
      </head>
      <body>
        <div class="badge">
        <span>405</span>
        </div>
        <a title="Gena Deev" href="https://github.com/GenaDeev/" target="_blank" rel="noopener noreferrer">
        <img src="https://blackmaps.com.ar/image/genadev-v-nobg-2.webp" alt="Logo de GenaDeev">
        </a>
        <div class="badge">
          <span>GenaHost</span> by <span>GenaDeev</span>
        </div>
        <h1>Method not Allowed</h1>
        <h2>Cannot GET <span>/api/mail/send</span></h2>
      </body>
    </html>
  `;

  return new NextResponse(htmlContent, {
    headers: {
      "Content-Type": "text/html",
    },
    status: 405,
  });
}
