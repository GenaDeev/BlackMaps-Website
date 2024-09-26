import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";
    const sort = searchParams.get("sort") || "date-desc";
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 15;

    const res = await fetch(`https://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery?query=${query}&sort=${sort}&page=${page}&limit=${limit}`);
    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
}
