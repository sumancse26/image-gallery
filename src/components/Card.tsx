//defining interface
interface Image {
    id: number;
    imgName: string;
    isChecked: boolean | null;
  }

  //defining props type
type CardPropsType = {
    imgInfo: {
        
            id: number;
            imgName: string;
            isChecked: boolean | null;
    };
    handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>, imgInfo: Image) => void;
    index: number;
}

const Card = ({imgInfo, handleCheckbox, index}: CardPropsType) => {

    const imgName = `images/${imgInfo.imgName}`
    
    return (
        <>
            <div className={index == 0 ? 'img-container big-img' : 'img-container'}>
                <img src={imgName} alt="Image" className={ imgInfo?.isChecked ? 'checked-img' : ''} />
                <input className="input-checked" type="checkbox" onChange={(e) => handleCheckbox(e, imgInfo)}/>
            </div>
        </>
    )
}

export default Card;
