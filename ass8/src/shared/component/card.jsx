function Card({title,category}){
    return(
        <>
        <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl">
                {title}
            </h1>
            <div className="flex flex-col">
            <h3 >
                {category}
            </h3>
            </div>
        </div>
        </>
    )
}
export default Card;