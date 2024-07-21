import { useEffect, useState } from "react";

let data = ['https://wallpapercave.com/wp/wp3307431.jpg',
'https://wallpaperaccess.com/full/1163741.jpg', 
'https://wallpaperaccess.com/full/83937.jpg',
'https://wallpapercave.com/wp/vai7TgU.jpg'];

const ImageSlider = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const handleNextClick = () => {
        console.log(activeImageIndex);
        if(activeImageIndex === data.length - 1){
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(activeImageIndex + 1);
        }
    }
    const handlePreviousClick = () => {
        console.log(activeImageIndex);
        if(activeImageIndex === 0){
            setActiveImageIndex(data.length -1);
        } else {
            setActiveImageIndex(activeImageIndex - 1);
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImageIndex]);

    return (
        <div className="flex justify-center">
            <button className="font-bold p-3 m-10" onClick={handlePreviousClick}>Previous</button>
            <img src={data[activeImageIndex]} className="w-[700px] h-[500px] object-contain"/>
            <button className="font-bold p-3 m-10" onClick={handleNextClick}>Next</button>
        </div>
    );
}

export default ImageSlider;