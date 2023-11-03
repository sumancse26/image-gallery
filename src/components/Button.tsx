import { useState } from 'react';
import AddImage from '../modal/AddImage';

interface Image {
    id: number;
    imgName: string;
  }
const Button = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState<Image[]>([]);

    //opening modal
    const openModalHandler = () => {
        setShowModal(true);
        const getData = JSON.parse(localStorage.getItem('myData') || '[]');
        setData(getData);
    }

    //addImageHandler
    const addImageHandler = (imgName: string, isClose: boolean) => {

        setShowModal(isClose);

        const imgItem = {
            id: 12,
            imgName: imgName
        }
        const setData=[...data, imgItem];
        localStorage.setItem('myData', JSON.stringify(setData));    
    }
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center py-3 add-img" onClick={openModalHandler}>
                <span className="material-symbols-outlined"> imagesmode </span>
                <button type="button" className="border-0 bg-transparent mt-2" >
                    Add Image
                </button>
            </div>
            
            {/*Add Image Modal */}
            <AddImage isModalOpen={showModal} addImageHandler={addImageHandler} />
        </>
    )
}

export default Button;