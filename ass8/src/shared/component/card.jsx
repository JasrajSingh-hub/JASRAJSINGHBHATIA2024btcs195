function Card({title,category}){
    return(
        <>
        <div>
            <h1>
                {title}
            </h1>
            <h3>
                {category}
            </h3>
        </div>
        </>
    )
}
export default Card;