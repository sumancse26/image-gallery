//defining interface
interface Image {
    id: number;
    imgName: string;
  }

  //defining props type
type CardPropsType = {
    imgInfo: {
        id: number;
        imgName: string;
    };
    handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>, imgInfo: Image) => void;
    index: number;
}

const Card = ({imgInfo, handleCheckbox, index}: CardPropsType) => {

    const imgName = `images/${imgInfo.imgName}`
    
    return (
        <>
            <div className={index == 0 ? 'img-container big-img' : 'img-container'}>
                <img src={imgName} alt="Image" />
                <input className="checkbox" type="checkbox" onChange={(e) => handleCheckbox(e, imgInfo)}/>
            </div>
        </>
    )
}

export default Card;
