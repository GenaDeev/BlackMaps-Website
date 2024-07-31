import Image from "next/image"
import PoweredByGpt from "./PoweredByGpt"

export default function HomeArticle({ title, image, children, alignement, locale }) {

    const TextPart = () => {
        return (
            <div itemScope itemType="https://schema.org/Question" className="flex flex-col gap-8 md:w-1/2">
                <h3 itemProp="name" className="text-black dark:text-white font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h3>
                <div itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-[20px] max-w-[600px] text-[#2d2d2d] dark:text-[#eee]">
                        {children}
                    </p>
                </div>
                <PoweredByGpt locale={locale} />
            </div>
        )
    }

    const ImagePart = () => {
        return (
            <a href={image.source} className="flex w-full md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24 p-2 hover:-rotate-6 hover:scale-105 transition duration-300 filter hover:drop-shadow-custom-lg">
                <Image
                    loading="lazy"
                    src={image.source}
                    className="rounded-xl md:w-3/4"
                    alt={image.alternate}
                    width={400}
                    height={200}
                />
            </a>
        )
    }

    return (
        <article className="flex flex-col md:flex-row w-full gap-8 shadow-xl shadow-black/50 dark:shadow-white/50 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
            {
                alignement === "right" ?
                    <>
                        <ImagePart />
                        <TextPart />
                    </>
                    :
                    <>
                        <TextPart />
                        <ImagePart />
                    </>
            }
        </article>
    )
}