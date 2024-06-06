"use client";
import { useState, useEffect } from "react";
import MapCard from "./MapCard";

export default function ClientSide() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortCriteria, setSortCriteria] = useState("date-desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [maps, setMaps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const mapsPerPage = 15;

    useEffect(() => {
        setLoading(true);
        fetch("https://filehost.comidolar.com.ar:6060/api/blackmaps/mapgallery")
            .then(response => response.json())
            .then(data => {
                setMaps(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching maps:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setScreenWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
    };

    const filteredAndSortedMaps = () => {
        return maps
            .filter(map => map.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                if (sortCriteria === "date-desc") {
                    return b.id - a.id;
                } else if (sortCriteria === "date-asc") {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                } else if (sortCriteria === "likes") {
                    return b.likes - a.likes;
                }
                return 0;
            });
    };

    const indexOfLastMap = currentPage * mapsPerPage;
    const indexOfFirstMap = indexOfLastMap - mapsPerPage;
    const currentMaps = filteredAndSortedMaps().slice(indexOfFirstMap, indexOfLastMap);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredAndSortedMaps().length / mapsPerPage); i++) {
        pageNumbers.push(i);
    }

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === Math.ceil(filteredAndSortedMaps().length / mapsPerPage);

    return (
        <div className="flex flex-col items-center">
            <div className="mt-8 gap-4 flex flex-col md:flex-row items-center justify-between">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="px-4 h-10 border border-neutral-500 dark:placeholder:text-white placeholder:text-[#3d3d3d] dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff] mb-4 md:mb-0"
                />
                <select
                    value={sortCriteria}
                    onChange={(e) => handleSort(e.target.value)}
                    className="bg-white px-4 h-10 border text-[#3d3d3d] dark:text-white border-neutral-500 dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff]"
                >
                    <option value="date-desc">Fecha (más reciente)</option>
                    <option value="date-asc">Fecha (más antigua)</option>
                    <option title="Proximamente..." disabled value="likes">Likes</option>
                </select>
            </div>
            {loading ? (
                <div className="maps-container flex flex-wrap gap-8 items-center justify-center pt-24 pb-16 px-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                        <div
                            key={index}
                            className="h-[500px] w-[350px] max-w-sm flex flex-col bg-white border border-neutral-200 rounded-lg shadow-xl dark:bg-[#090909] dark:border-neutral-700"
                        >
                            <a className="image-loading loading rounded">
                            </a>
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
                        {currentMaps.map(({ title, map, tweet, id, date, likes }) => (
                            <MapCard likes={likes} key={id} title={title} mapid={id} date={date} map={map} tweet={tweet} />
                        ))}
                    </div>
                    <nav className="p-2 sm:p-4 flex justify-center">
                        <ul className="inline-flex flex-wrap -space-x-px text-xs">
                            <li>
                                <button className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-e-0 border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white ${isFirstPage ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !isFirstPage && paginate(currentPage - 1)}>Anterior</button>
                            </li>
                            {pageNumbers.map(number => (
                                <li key={number}>
                                    <button className={`flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border ${currentPage === number ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-neutral-300'} hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white`} onClick={() => paginate(number)}>
                                        {screenWidth > 1080 ? `Pagina: ${number}` : number}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button className={`flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white ${isLastPage ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !isLastPage && paginate(currentPage + 1)}>Siguiente</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
