"use client";
import { useState, useEffect } from "react";
import MapCard from "./MapCard";

export default function ClientSide() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortCriteria, setSortCriteria] = useState("date-desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [maps, setMaps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [update, setUpdate] = useState('');
    const [lang, setLang] = useState("es");
    const mapsPerPage = 15;

    useEffect(() => {
        const pathname = window.location.pathname;
        const hasEnBeforeRoute = pathname.includes("/en/") && pathname.indexOf("/en/") < pathname.indexOf("/maps");
        if (hasEnBeforeRoute) {
            setLang("en");
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/maps?query=${searchQuery}&sort=${sortCriteria}&page=${currentPage}&limit=${mapsPerPage}`);
                const data = await response.json();
                setMaps(data.currentMaps);
                setTotalPages(data.totalPages);
                setUpdate(data.update);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching maps:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [searchQuery, sortCriteria, currentPage]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);  // Reiniciar la página cuando se busca
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
        setCurrentPage(1);  // Reiniciar la página cuando se cambia el criterio de ordenación
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className="flex flex-col items-center">
            <p className="px-4 text-center border border-neutral-500 dark:placeholder:text-white placeholder:text-[#3d3d3d] dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff] mb-4 md:mb-0">{lang === "es" ? "Última actualización:" : "Last update:"} <span className="block text-lg font-semibold">{!update ? "N/A" : update}</span></p>
            <div className="mt-8 gap-4 flex flex-col md:flex-row items-center justify-between">
                <input
                    type="text"
                    placeholder={lang === "es" ? "Buscar..." : "Search..."}
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="px-4 h-10 border border-neutral-500 dark:placeholder:text-white placeholder:text-[#3d3d3d] dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff] mb-4 md:mb-0"
                />
                <select
                    value={sortCriteria}
                    onChange={(e) => handleSort(e.target.value)}
                    className="bg-white px-4 h-10 border text-[#3d3d3d] dark:text-white border-neutral-500 dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff]"
                >
                    <option value="date-desc">{lang === "es" ? "Ordenar por fecha (más reciente)" : "Sort by date (most recent)"}</option>
                    <option value="date-asc">{lang === "es" ? "Ordenar por fecha (más antigua)" : "Sort by date (oldest)"}</option>
                    <option value="likes">Likes</option>
                </select>
            </div>

            {loading ? (
                <div className="maps-container flex flex-wrap gap-8 items-center justify-center pt-24 pb-16 px-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                        <div
                            key={index}
                            className="h-[500px] w-[350px] max-w-sm flex flex-col bg-white border border-neutral-200 rounded-lg shadow-xl dark:bg-[#090909] dark:border-neutral-700"
                        >
                            <div className="image-loading loading rounded">
                            </div>
                            <div className="p-5 flex flex-col gap-2">
                                <div className="flex items-center rounded text-neutral-600 font-bold w-full h-12 loading">
                                </div>
                                <div className="flex items-center rounded text-neutral-600 font-bold w-full h-24 loading">
                                </div>
                                <div className="flex items-center rounded text-neutral-600 font-bold w-full h-8 loading">
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <div className="maps-container flex flex-wrap gap-8 items-center justify-center pt-24 pb-16 px-4">
                        {maps.map(({ title, map, tweet, id, date, likes, mapsm }) => (
                            <MapCard
                                likes={likes}
                                key={id}
                                title={title}
                                mapid={id}
                                date={date}
                                map={map}
                                tweet={tweet}
                                mapsm={mapsm}
                                locale={lang}
                            />
                        ))}
                    </div>
                    <nav className="p-2 sm:p-4 flex justify-center">
                        <ul className="inline-flex flex-wrap justify-center gap-y-3 -space-x-px text-xs">
                            <li>
                                <button
                                    className={`px-4 py-2 border ${isFirstPage
                                        ? 'flex items-center justify-center px-3 h-8 leading-tight rounded-l-xl text-neutral-500 bg-white border border-neutral-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-100 cursor-not-allowed'
                                        : 'flex items-center justify-center px-3 h-8 leading-tight rounded-l-xl text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                        }`}
                                    disabled={isFirstPage}
                                    onClick={() => !isFirstPage && paginate(currentPage - 1)}
                                >
                                    {lang === "es" ? "Anterior" : "Previous"}
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`px-4 py-2 border ${currentPage <= 4
                                        ? 'hidden'
                                        : 'flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                        }`}
                                    disabled={isFirstPage}
                                    onClick={() => paginate(1)}
                                >
                                    1
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1;

                                // Mostrar solo las páginas cercanas a la actual
                                if (
                                    pageNumber >= currentPage - 3 && pageNumber <= currentPage + 3
                                ) {
                                    return (
                                        <li key={pageNumber}>
                                            <button
                                                className={`px-4 py-2 border ${currentPage === pageNumber
                                                    ? 'flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-100 cursor-not-allowed'
                                                    : 'flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                                    }`}
                                                onClick={() => paginate(pageNumber)}
                                            >
                                                {pageNumber}
                                            </button>
                                        </li>
                                    );
                                }
                                return null;
                            })}

                            <li>
                                <button
                                    className={`px-4 py-2 border ${isLastPage
                                        ? 'hidden'
                                        : 'flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                        }`}
                                    disabled={isLastPage}
                                    onClick={() => paginate(totalPages)}
                                >
                                    {totalPages}
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`px-4 py-2 border ${isLastPage
                                        ? 'flex items-center justify-center px-3 h-8 leading-tight rounded-r-xl text-neutral-500 bg-white border border-neutral-300 dark:bg-neutral-600 dark:border-neutral-500 dark:text-neutral-100 cursor-not-allowed'
                                        : 'flex items-center justify-center px-3 h-8 leading-tight rounded-r-xl text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                        }`}
                                    disabled={isLastPage}
                                    onClick={() => !isLastPage && paginate(currentPage + 1)}
                                >
                                    {lang === "es" ? "Siguiente" : "Next"}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
