import { useEffect, useState } from "react";


//define type
type AddImgProps = {
    isModalOpen: boolean;
    addImageHandler: (imgName: string, isClose: boolean) => void;
}

const AddImage = ({isModalOpen, addImageHandler}: AddImgProps) => {
const [imgName, setImgName] = useState('')
    useEffect(() => {
        if(isModalOpen){
            document.getElementById('add_image').showModal()
        }
    },[isModalOpen])

    // getImageHandler
    const getImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fullPath = e.target.value;
        const pathArray = fullPath.split(/[\\/]/);
        const originalImageName = pathArray[pathArray.length - 1];
        setImgName(originalImageName)
    }
    return (

        <>
            <dialog id="add_image" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-sm">Add Image!</h3>
                    <div className="modal-action">
                        <form method="dialog" className="w-100">
                            <div>
                                <label className="block">
                                    <span className="sr-only">Choose Image</span>
                                    <input 
                                        type="file" 
                                        className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100"
                                        onChange={(e) => getImageHandler(e)}
                                    />
                                </label>
                            </div>
                            <div className="w-100 flex items-center justify-center gap-3">
                                <button className="btn text-sm" onClick={() => addImageHandler('', false)}>Close</button>
                                <button className="btn text-sm" onClick={() => addImageHandler(imgName, false)}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

  )

}
export default AddImage;