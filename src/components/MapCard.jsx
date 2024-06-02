export default function MapCard(props) {
    const { title, map, tweet, mapid, date } = props;
    return (
        <div
            className="h-[500px] max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-[#090909] dark:border-gray-700"
        >
            <a href={map}>
                <img
                    className="rounded-t-lg w-full h-56"
                    src={map}
                    alt={"Mapa de BlackMaps titulado: " + title}
                />
            </a>
            <div className="p-5 flex flex-col justify-between">
                <div>
                    <div className="text-neutral-600 font-bold flex items-center gap-2">
                    <svg
                        className="w-5 h-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{ fill: "currentColor", transform: "", msfilter: "" }}
                    >
                        <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z" />
                    </svg>
                    {date}
                    </div>
                    <a href={tweet}>
                        <h5
                            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            {title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        de <a href={tweet} className="font-bold text-[#eee]">Twitter</a>. Subido por <span className="font-bold text-[#eee]">BlackMaps</span>
                    </p>
                </div>
                <div className="flex w-full justify-between items-center">
                    <a
                        href={tweet}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition duration-200 text-white bg-[#1d9bf0] rounded-full hover:bg-[#45a1df] focus:ring-4 focus:outline-none focus:ring-[#308aff] dark:bg-[#1d9bf0] dark:hover:bg-[#45a1df] dark:focus:ring-[#308aff]"
                    >
                        Ir al tweet
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                        </svg>
                    </a>
                    <h6
                        className="px-1 cursor-pointer rounded-full dark:bg-[#2d2d2d]"
                        title={"Este es el mapa numero " + mapid + "de Black Maps"}
                    >
                        #{mapid}
                    </h6>
                </div>
            </div>
        </div>)
}