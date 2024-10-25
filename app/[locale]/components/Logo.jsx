import Image from 'next/image'
export default function Logo(props) {
    const { width, height, className, imageClass } = props
    return (
        <div className={className}>
            <Image
                unoptimized
                src="/image/blackmaps_transparent.webp"
                width={width}
                height={height}
                className={imageClass}
                alt='Logo de Black Maps'
            />
        </div>
    )
}