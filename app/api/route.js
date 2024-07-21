import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
      error: 405,
      message: 'No puedes usar GET en /api',
      author: 'BlackMaps Website by GenaDev',
      linkedin: 'https://www.linkedin.com/in/genadev'
    }, { status: 405 });
  }