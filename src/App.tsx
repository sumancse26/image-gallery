import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Title from './components/Title';
import Data from './db/ImgData';
interface Image {
    id: number;
    imgName: string;
    isChecked: boolean | null;
  }

type InputChangeType = React.ChangeEvent<HTMLInputElement>;

//getting data
const imgData = Data
const App: React.FC = () => {
    
    const [totalImage, setTotalImage] = useState<Image[]>([]);
    const [checkedImage, setCheckedImage] = useState<Image[]>([]);

    useEffect(() => {
        //setting fetched data to state
        setTotalImage(imgData);

        const updatedImg = JSON.stringify(imgData);
        localStorage.setItem('myData', updatedImg);
        return () => {}
   
    }, [])

    //getting checked data to state
    const handleCheckbox = (e: InputChangeType, imgInfo: Image) => {

        if(e.target.checked){
            const findIndex = totalImage.findIndex(item => item.id == imgInfo.id);
            const updatedImg = {
                ...imgInfo,
                isChecked: true
            }
            totalImage[findIndex] = updatedImg
            
            setCheckedImage((prev: Image[]) => [...prev, updatedImg])
        }else{
            const findIndex = totalImage.findIndex(item => item.id == imgInfo.id);
            const updatedImg = {
                ...imgInfo,
                isChecked: false
            }
            totalImage[findIndex] = updatedImg
            const filtererImage = checkedImage.filter(item => item.id != imgInfo.id)
            setCheckedImage(filtererImage)
        }
    }

    //deleting image
    const handleDeleteImage = () => {
        const filteredArray = totalImage.filter(item => !checkedImage.includes(item));
        setTotalImage(filteredArray)
        setCheckedImage([])
    }

  return (
    <>
        <div className="grid-container container px-5">
            {/* Title component */}
            <Title checkedImage={checkedImage} handleDeleteImage={handleDeleteImage} />

            {/* Card component */}

            {
                totalImage.map((singleImg, index) => ( 
                    <Card
                        imgInfo={singleImg} handleCheckbox={handleCheckbox} index={index}  key={singleImg.id}
                    />
            ))}
            
            {/* Button component  */}
            <Button />
        </div>
    </>
  )
}

export default App
