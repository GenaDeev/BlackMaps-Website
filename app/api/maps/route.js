import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery');
    const body = await res.json();
    return NextResponse.json(body, { status: 200 });
}
