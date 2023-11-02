const Card = () => {
    return (
        <>
            {/* <div className="big-img img-container">
                <img className="container-checked" src="images/image-1.webp" alt="Image" />
                <input className="checkbox" type="checkbox"  />
            </div> */}
            <div className="img-container">
                <img src="images/image-2.webp" alt="Image" />
                <input className="checkbox" type="checkbox" />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center py-3 add-img">
                <span className="material-symbols-outlined"> imagesmode </span>
                
                <button className="border-0 bg-transparent mt-2">Add Image</button>
            </div>
        </>
    )
}

export default Card;
