export default function ErrorMessage(props) {
    const { type, message } = props;

    return (
        <div className={type === "warning" ? "bg-orange-600/30 p-8 flex flex-col sm:flex-row items-center gap-6 rounded-xl m-8" : type === "error" ? "bg-red-600/30 p-8 flex flex-col sm:flex-row items-center gap-6 rounded-xl m-8": type === "minor" && "bg-blue-600/30 p-8 flex flex-col sm:flex-row items-center gap-6 rounded-xl m-8"}>
            <div className="error-icon">
            {
                type === "warning" ?
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path></svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
            }
            </div>
            <div className="error-message flex flex-col gap-4 text-md sm:text-lg md:text-xl">
                {message}
                <a href="https://www.linkedin.com/in/genadev" className="italic opacity-60 hover:opacity-100 transition duration-200">GenaDev</a>
            </div>
        </div>
    )
}