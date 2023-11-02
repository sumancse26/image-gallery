const Title = () =>{
    return (
        <>
            <div className="gallery-title d-flex align-items-center justify-content-between p-3 mb-">
                {/* <h4>Gallery</h4>  */}
                <div className="d-flex align-items-center">
                    <input type="checkbox"  />
                    <h6 className="p-1">3 Files Selected</h6>
                </div>
                <button type="button">Delete Selected File</button>
            </div>
        </>
    )
}

export default Title;