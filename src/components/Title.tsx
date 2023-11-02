//defining type
type CheckedImgDataType = {
    checkedImage: {
        id: number;
        imgName: string;
    }[];
    handleDeleteImage: () => void
}

const Title = ({checkedImage, handleDeleteImage}: CheckedImgDataType) =>{
    if(!checkedImage.length){
        return <div className="gallery-title d-flex align-items-center justify-content-between p-3 mb-"><h4>Gallery</h4></div>
    }

    return (
        <>
            <div className="gallery-title d-flex align-items-center justify-content-between p-3 mb-">
                <div className="d-flex align-items-center">
                    <input type="checkbox"  checked={checkedImage.length ? true : false} onChange={() => {}}/>
                    <h6 className="p-1"> <span >{checkedImage.length}</span> Files Selected</h6>
                </div>
                <button onClick={handleDeleteImage}>Delete Selected File</button>
            </div>
        </>
    )
}

export default Title;