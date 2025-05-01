import Starship from '../assets/starShip.svg'
import { GoFileSymlinkFile } from "react-icons/go";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [image, setImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate(); 

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const imageData = reader.result;
                setImage(imageData); 

                // 🚀 Langsung navigasi ke halaman crop
                navigate("/Algoritma", { state: { image: imageData } });
            };
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true); // 🟢 Aktifkan efek saat dragging
    };

    const handleDragLeave = () => {
        setIsDragging(false); // 🔴 Hapus efek saat dragging selesai
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false); // 🔴 Hapus efek dragging
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };
    return (
        <div className="h-dvh px-3 pt-10 pb-20 flex flex-col gap-7 justify-center items-center md:gap-10">
            <img className='h-50 md:h-75' src={Starship} alt="" />
            <div 
                className={`relative w-75 h-35 mb-5 rounded-3xl border-2 border-dashed text-center ${
                    isDragging ? "border-blue-400 bg-blue-900/50" : "border-white/20 bg-neutral-700/50"
                } flex flex-col justify-center items-center transition-all duration-300 md:w-130 md:h-60 md:rounded-5xl`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
            >
                <GoFileSymlinkFile className="text-3xl mb-4 text-white md:text-5xl md:mb-8" />
                <h6 className="text-white text-md font-bold mb-1 md:text-2xl">
                    {isDragging ? "Drop the file here" : "Drag or click to select a file"}
                </h6>
                <p className="text-white text-xs opacity-50 md:text-lg">
                    Supported format: PNG, JPG, JPEG
                </p>

                {/* Input file yang tersembunyi */}
                <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    id="inputImg" 
                    onChange={handleFileChange}
                />
            </div>
        </div>
    
    )
}