import Image from "next/image"

export default function HomeArticle({ title, image, children, alignement }) {

    const TextPart = () => {
        return (
            <div itemScope itemType="https://schema.org/Question" className="flex flex-col gap-8 md:w-1/2">
                <h3 itemProp="name" className="text-black dark:text-white font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h3>
                <div itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-[20px] max-w-[600px] text-[#2d2d2d] dark:text-[#eee]">
                        {children}
                    </p>
                </div>
            </div>
        )
    }

    const ImagePart = () => {
        return (
            <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                <Image
                    loading="lazy"
                    src={image.source}
                    className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                    alt={image.alternate}
                    width={400}
                    height={200}
                />
            </div>
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