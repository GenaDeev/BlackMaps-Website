import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('http://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery');
    return NextResponse.json({
        res
      }, { status: 200 });
}