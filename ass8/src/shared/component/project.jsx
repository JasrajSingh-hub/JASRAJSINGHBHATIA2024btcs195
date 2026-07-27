function PP({title,category,bio}){
    return(
        <>
        <div className="flex flex-col gap-3 ">
            <h1 className="text-3xl">
                {title}
            </h1>
            <h1>{bio}</h1>
            <div className="">
            <h3 >
                {category.map((pass,index)=>(
                    <h1>{pass}</h1>
                ))}
            </h3>
            </div>
        </div>
        </>
    )
}
export default PP;