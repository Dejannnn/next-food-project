"use client";
import { MutableRefObject, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image"
interface IImagePicker{
    label: string;
    name: string;
}
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export default function ImagePicker({label, name}: IImagePicker){
    const [pickedImage, setPicketImage] = useState(null);
    const imageInput = useRef<HTMLInputElement | undefined>();
    function hanldePickClick(){
        imageInput.current?.click();
    }

    const handleImage = (event: ChangeEvent) => {
        if (!event.target.files) {
            setPicketImage(null);
            return
        };
        const file: File = event?.target?.files[0];
        
        const fileReader: FileReader =  new FileReader();
        fileReader.onload = (event: ProgressEvent<FileReader>) => {
            const result: any = event.target?.result;
            setPicketImage(result);
          };
        fileReader.onerror = (event: ProgressEvent<FileReader>) => {
            console.error("File reading error:", event);
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt="Image selected by user" fill/>}
                </div>
                <input 
                    className={classes.input}
                    id={name}
                    type="file"
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput as any}
                    onChange={(event) => handleImage(event)}
                />
                <button className={classes.button} type="button" onClick={hanldePickClick}>Pick image</button>
            </div>
        </div>
    )
}