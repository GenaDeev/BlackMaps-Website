import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || ""; // Término de búsqueda
    const sort = searchParams.get("sort") || "date-desc"; // Criterio de ordenación
    const page = parseInt(searchParams.get("page")) || 1; // Página actual
    const mapsPerPage = parseInt(searchParams.get("limit")) || 15; // Mapas por página

    const res = await fetch('https://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery');
    const maps = await res.json();

    const up = await fetch('https://filehost.comidolar.com.ar:6060/api/blackmaps/update');
    const { update } = await up.json();

    const filteredMaps = maps.filter((map) =>
        map.title.toLowerCase().includes(query.toLowerCase())
    );

    const sortedMaps = filteredMaps.sort((a, b) => {
        if (sort === "date-desc") {
            return b.id - a.id;
        } else if (sort === "date-asc") {
            return new Date(a.date) - new Date(b.date);
        } else if (sort === "likes") {
            return (b.likes || 0) - (a.likes || 0);
        }
        return 0;
    });

    const indexOfLastMap = page * mapsPerPage;
    const indexOfFirstMap = indexOfLastMap - mapsPerPage;
    const currentMaps = sortedMaps.slice(indexOfFirstMap, indexOfLastMap);

    return NextResponse.json({
        currentMaps,
        totalPages: Math.ceil(filteredMaps.length / mapsPerPage),
        currentPage: page,
        totalMaps: filteredMaps.length,
        update,
    }, { status: 200 });
}
