import Image from "next/image";
import CategoryIcon from "./CategoryIcon";

export default function MapCard(props) {
  const { title, map, tweet, mapid, date, likes, mapsm, locale, category } =
    props;

  const translations = {
    es: {
      fullScreenTitle: "Pantalla completa",
      mapAlt: `Mapa de BlackMaps titulado: ${title}`,
      fromTwitter: "de",
      uploadedBy: "Subido por",
      goToTweet: "Ir al tweet",
      mapNumber: `Este es el mapa numero ${mapid} de Black Maps`,
      nonCategorized: "Sin categorizar aún",
    },
    en: {
      fullScreenTitle: "Full screen",
      mapAlt: `BlackMaps map titled: ${title}`,
      fromTwitter: "from",
      uploadedBy: "Uploaded by",
      goToTweet: "Go to tweet",
      mapNumber: `This is map number ${mapid} from Black Maps`,
      nonCategorized: "Not yet categorized",
    },
  };

  const getCategoryNumber = (category) => {
    switch (category) {
      case "Naturaleza":
        return 0;
      case "Cultura":
        return 1;
      case "Economia":
        return 2;
      case "Social":
        return 3;
      case "Educacion":
        return 4;
      case "Salud":
        return 5;
      case "Tecnologia":
        return 6;
      case "Politica":
        return 7;
      case "Musica":
        return 8;
      case "Deporte":
        return 9;
      case "Otros":
        return 10;
      default:
        return undefined;
    }
  };

  const t = translations[locale] || translations.es;
  return (
    <article
      data-tweet-id={mapid}
      className="h-[500px] w-[350px] max-w-sm flex flex-col justify-between bg-white border border-neutral-200 rounded-lg shadow-xl dark:bg-[#090909] dark:border-neutral-700"
    >
      <a href={map}>
        <button
          title={t.fullScreenTitle}
          className="transition duration-200 absolute p-2 dark:hover:bg-neutral-600/80 bg-neutral-200/50 hover:bg-white/80 dark:bg-black/80 rounded-full z-40 m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
          </svg>
        </button>
        <Image
          unoptimized
          loading="lazy"
          className="map-card rounded-t-lg object-cover"
          width={350}
          height={224}
          src={mapsm}
          alt={t.mapAlt}
        />
      </a>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-neutral-600 font-bold w-full justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ fill: "currentColor", transform: "", msfilter: "" }}
              >
                <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z" />
              </svg>
              {date}
            </div>
          </div>
          <a href={tweet}>
            <h5 className="mb-2 text-2xl line-clamp-3 font-bold tracking-tight text-ellipsis overflow-hidden max-h-[100px] text-gray-900 dark:text-white">
              {title}
            </h5>
            <span className="mb-2 flex gap-2 items-center">
              <CategoryIcon category={getCategoryNumber(category)} size={24} />
              {category ? category : t.nonCategorized}
            </span>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {t.fromTwitter}{" "}
            <a
              href={tweet}
              className="font-bold dark:text-[#eee] text-[#3d3d3d]"
            >
              Twitter
            </a>
            . {t.uploadedBy}{" "}
            <span className="font-bold dark:text-[#eee] text-[#3d3d3d]">
              BlackMaps
            </span>
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <a
            href={tweet}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition duration-200 text-white bg-[#1d9bf0] rounded-full hover:bg-[#45a1df] focus:ring-4 focus:outline-none focus:ring-[#308aff] dark:bg-[#1d9bf0] dark:hover:bg-[#45a1df] dark:focus:ring-[#308aff]"
          >
            {t.goToTweet}
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
                d="M1 5h12m0 0L9 1m4 4L9 9"
              ></path>
            </svg>
          </a>
          <div className="flex items-center gap-4">
            <span
              title={likes + " likes"}
              className="h-[36px] px-2 text-sm cursor-pointer rounded-full dark:bg-[#2d2d2d] bg-[#aaa] flex gap-2 items-center"
            >
              <svg
                width="24px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"
                ></path>
              </svg>
              {!likes ? "0" : likes}
            </span>
            <span
              className="h-[36px] flex items-center px-2 cursor-pointer rounded-full dark:bg-[#2d2d2d] bg-[#aaa]"
              title={t.mapNumber}
            >
              #{mapid}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
