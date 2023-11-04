
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Title from "./components/Title";
import Data from "./db/ImgData";

import { DragDropContext, DragUpdate, Draggable, Droppable } from "react-beautiful-dnd";
interface Image {
    id: number;
    imgName: string;
    isChecked: boolean | null;
}

// a little function to help us with reordering the result
const reorder = (list: Image[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

type InputChangeType = React.ChangeEvent<HTMLInputElement>;

//getting data
const imgData = Data;
const App: React.FC = () => {
    const [totalImage, setTotalImage] = useState<Image[]>([]);
    const [checkedImage, setCheckedImage] = useState<Image[]>([]);

    useEffect(() => {
        //setting fetched data to state
        setTotalImage(imgData);

        const updatedImg = JSON.stringify(imgData);
        localStorage.setItem("myData", updatedImg);
        return () => {};
    }, []);

    //getting checked data to state
    const handleCheckbox = (e: InputChangeType, imgInfo: Image) => {
        if (e.target.checked) {
            const findIndex = totalImage.findIndex((item) => item.id == imgInfo.id);
            const updatedImg = {
                ...imgInfo,
                isChecked: true
            };
            totalImage[findIndex] = updatedImg;

            setCheckedImage((prev: Image[]) => [...prev, updatedImg]);
        } else {
            const findIndex = totalImage.findIndex((item) => item.id == imgInfo.id);
            const updatedImg = {
                ...imgInfo,
                isChecked: false
            };
            totalImage[findIndex] = updatedImg;
            const filtererImage = checkedImage.filter((item) => item.id != imgInfo.id);
            setCheckedImage(filtererImage);
        }
    };

    //deleting image
    const handleDeleteImage = () => {
        const filteredArray = totalImage.filter((item) => !checkedImage.includes(item));
        setTotalImage(filteredArray);
        setCheckedImage([]);
    };

    const onDragEnd = (result: DragUpdate) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        console.log(result);
        const recordedItems = reorder(totalImage, result.source.index, result.destination.index) as Image[];

        console.log(recordedItems);

        setTotalImage(recordedItems);
    };

    return (
        <>
            <div className="root container px-5">
                {/* Title component */}
                <Title checkedImage={checkedImage} handleDeleteImage={handleDeleteImage} />

                {/* Card component */}

                <DragDropContext onDragEnd={onDragEnd} >
                    <Droppable droppableId="droppable" >
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="grid-container">
                                {totalImage.map((singleImg, index) => (
                                    <Draggable key={singleImg.id} draggableId={"item-" + singleImg.id} index={index}>
                                        
                                        {(provided) => (
                                            <div
                                                className={index == 0 ? "img-container big-img" : "img-container"}
                                                ref={provided.innerRef}
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}>
                                                <Card
                                                    imgInfo={singleImg}
                                                    handleCheckbox={handleCheckbox}
                                                    index={index}
                                                    key={singleImg.id}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                                <Button />
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* {totalImage.map((singleImg, index) => (
                    <Card imgInfo={singleImg} handleCheckbox={handleCheckbox} index={index} key={singleImg.id} />
                ))} */}

                
                {/* Button component  */}
            </div>
        </>
    );
};

export default App;
