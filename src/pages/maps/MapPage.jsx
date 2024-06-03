import MapCard from "../../components/MapCard";
import { useState } from "react";
import { Helmet } from 'react-helmet';

export default function MapPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortCriteria, setSortCriteria] = useState("date-desc");
    const [currentPage, setCurrentPage] = useState(1);
    const mapsPerPage = 9;
    const maps = [
        {
            title: "Life expectancy by Country",
            map: "https://pbs.twimg.com/media/Ea7dwSBXQAcvj1U?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1274199573003669507",
            id: 1,
            date: "2020-06-20",
            likes: undefined,
        },
        {
            title: "Countries where BlackPink has played live (Source: Wikipedia) ",
            map: "https://pbs.twimg.com/media/Ea7fP55WsAAO45O?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1274201215736451079",
            id: 2,
            date: "2020-06-20",
            likes: undefined,
        },
        {
            title: "Countries with Wolves (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/Ea_jxk8WkAYpzE1?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1274487667892289538",
            id: 3,
            date: "2020-06-20",
            likes: undefined,
        },
        {
            title: "Legality of Same Sex Marriage 🏳️‍🌈",
            map: "https://pbs.twimg.com/media/EbNatVDX0AEKfn1?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275462862237024257",
            id: 4,
            date: "2020-06-23",
            likes: undefined,
        },
        {
            title: "Countries with Peafowl 🦚 (Source: Wikipedia) *just natural habitat",
            map: "https://pbs.twimg.com/media/EbOW7H-WsAY4DFI?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275529069019500549",
            id: 5,
            date: "2020-06-23",
            likes: undefined,
        },
        {
            title: "Tax havens (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/EbOYCY4WsAIsxo4?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275530295295594504",
            id: 6,
            date: "2020-06-23",
            likes: undefined,
        },
        {
            title: "Most common blood type by country 🩸 (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/EbOYj45XYAIcw22?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275530870657552384",
            id: 7,
            date: "2020-06-23",
            likes: undefined,
        },
        {
            title: "Historical range of Mammoths (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/EbTdDYNXYAMSoG2?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275887651317600261",
            id: 8,
            date: "2020-06-24",
            likes: undefined,
        },
        {
            title: "Most voted third party on 2004 US elections 🇺🇸",
            map: "https://pbs.twimg.com/media/EbTdLKNWAAAECU5?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275887787078811649",
            id: 9,
            date: "2020-06-24",
            likes: undefined,
        },
        {
            title: "Countries with Gorillas 🦍 (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/EbTdw54XkAMoGFc?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1275888435933384705",
            id: 10,
            date: "2020-06-24",
            likes: undefined,
        },
        {
            title: "Coca-Cola vs Pepsi",
            map: "https://pbs.twimg.com/media/EbYPZy_XsAAqpo5?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276224487269322752",
            id: 11,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "Countries with Versace Stores (Source: Versace Website)",
            map: "https://pbs.twimg.com/media/EbYPgVAWAAA4rT7?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276224601597640706",
            id: 12,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "Major religion by country",
            map: "https://pbs.twimg.com/media/EbYPphPWAAAH0OL?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276224756816261121",
            id: 13,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "Countries with Tigers 🐅 (Source: Wikipedia)",
            map: "https://pbs.twimg.com/media/EbYSJWGXkAIsXOT?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276227505062584336",
            id: 14,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "Countries in the Southern Hemisphere",
            map: "https://pbs.twimg.com/media/EbYSWmJWkAEJ4rP?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276227730829463555",
            id: 15,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "2018 Mexican Presidential Election",
            map: "https://pbs.twimg.com/media/EbYSswNXsAAnXvk?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276228110103478275",
            id: 16,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "Highest temperature recorded by country 🌡",
            map: "https://pbs.twimg.com/media/EbZCFPxWsAMD7sY?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1276280208849584133",
            id: 17,
            date: "2020-06-25",
            likes: undefined,
        },
        {
            title: "2017 australian referendum legalize same sex marriage 🇦🇺",
            map: "https://pbs.twimg.com/media/EbnmcqiXYAMN6Z3?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1277305356738158592",
            id: 18,
            date: "2020-06-28",
            likes: undefined,
        },
        {
            title: "Electoral democracies (Source: FreedomHouse)",
            map: "https://pbs.twimg.com/media/Ebnp3fwXsAAlCD6?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1277309114897530880",
            id: 19,
            date: "2020-06-28",
            likes: undefined,
        },
        {
            title: "Legal status of homosexuality 🏳️‍🌈",
            map: "https://pbs.twimg.com/media/EboSd_BXgAA1lss?format=webp&name=large",
            tweet: "https://x.com/maps_black/status/1277353758742261761",
            id: 20,
            date: "2020-06-28",
            likes: undefined,
        },
    ];

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
        <main className="flex flex-col">
            <Helmet>
                <title>Galeria de Mapas | Black Maps</title>
                <meta name="description" content="descripcion galeria mapas" />
                <meta property="og:title" content="Black Maps | Los mejores mapas, ahora online." />
                <meta property="og:description" content="descripcion galeria mapas" />
                <meta property="og:image" content="https://blackmaps.vercel.app/maps-og.png" />
                <meta property="og:url" content="https://blackmaps.vercel.app/maps" />
                <meta name="twitter:title" content="Black Maps | Los mejores mapas, ahora online." />
                <meta name="twitter:description" content="descripcion galeria mapas." />
                <meta name="twitter:image" content="https://blackmaps.vercel.app/maps-og.png" />
                <meta name="twitter:url" content="https://blackmaps.vercel.app/maps" />
            </Helmet>
            <div className="pt-20 px-12 sm:px-20 my-12 items-center flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Black Maps - Galeria de Mapas
                </h1>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
                    Todos los mapas publicados por Mapitas Negros desde la creacion
                    de su cuenta.
                </h2>
                <div className="mt-8 gap-4 flex flex-col md:flex-row items-center justify-between">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="px-4 h-10 border border-gray-500 dark:placeholder:text-white placeholder:text-[#3d3d3d] dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff] mb-4 md:mb-0"
                    />
                    <select
                        value={sortCriteria}
                        onChange={(e) => handleSort(e.target.value)}
                        className="bg-white px-4 h-10 border text-[#3d3d3d] dark:text-white border-gray-500 dark:bg-[#3d3d3d] rounded-md focus:outline-none focus:border-[#3d3d3d] dark:focus:border-[#fff]"
                    >
                        <option value="date-desc">Fecha (más reciente)</option>
                        <option value="date-asc">Fecha (más antigua)</option>
                        <option title="Proximamente..." disabled value="likes">Likes</option>
                    </select>
                </div>
                <div className="maps-container flex flex-wrap gap-8 items-center justify-center pt-24 pb-16 px-4">
                    {currentMaps.map(({ title, map, tweet, id, date, likes }) => (
                        <MapCard likes={likes} key={id} title={title} mapid={id} date={date} map={map} tweet={tweet} />
                    ))}
                </div>
                <nav className="p-4">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                            <button className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-e-0 border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white ${isFirstPage ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !isFirstPage && paginate(currentPage - 1)}>Anterior</button>
                        </li>
                        {pageNumbers.map(number => (
                            <li key={number}>
                                <button className={`flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border ${currentPage === number ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-neutral-300'} hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white`} onClick={() => paginate(number)}>Pagina {number}</button>
                            </li>
                        ))}
                        <li>
                            <button className={`flex items-center justify-center px-3 h-8 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white ${isLastPage ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !isLastPage && paginate(currentPage + 1)}>Siguiente</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}
