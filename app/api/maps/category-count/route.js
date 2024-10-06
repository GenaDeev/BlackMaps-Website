import { NextResponse } from 'next/server';

export async function GET(req) {
    const res = await fetch(`https://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery/categories-count`);
    const data = await res.json();

    const parsed = {
        "Naturaleza": data["Naturaleza"],
        "Cultura": data["Cultura"],
        "Economia": data["Economia"],
        "Social": data["Social"],
        "Educacion": data["Educacion"],
        "Salud": data["Salud"],
        "Tecnologia": data["Tecnologia"],
        "Politica": data["Politica"],
        "Musica": data["Musica"],
        "Deporte": data["Deporte"],
        "Otros": data["Otros"],
        "Total": data["Naturaleza"] + data["Cultura"] + data["Economia"] + data["Social"] + data["Educacion"] + data["Salud"] + data["Tecnologia"] + data["Politica"] + data["Musica"] + data["Deporte"] + data["Otros"]
    }

    return NextResponse.json(parsed, { status: res.status });
}