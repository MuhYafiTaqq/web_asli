import { useLocation, useNavigate } from "react-router-dom";

import { FaDownload } from "react-icons/fa6";

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const { croppedImages = [] } = location.state || [];

    return (
        <>
            <div className="min-h-dvh flex px-3 pt-12 pb-20 md:container md:mx-auto flex-col md:flex-row justify-center items-center -z-1 md:gap-5 md:h-auto">
                <div className={`grid mb-3 text-center md:max-h-dvh grid-cols-3 gap-1 min-h-4/5 -z-1`}>
                    {croppedImages.map((src, index) => (
                        <div key={index} className="flex flex-col items-center relative">
                            <img src={src} alt={`Cropped ${index + 1}`} className="border border-black" />
                            <a href={src} download={`cropped-${index + 1}.png`} className="bg-blue-500 right-2 top-0 absolute text-white px-2 py-1 rounded mt-2">
                                <FaDownload />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center px-2 w-full h-50 flex flex-col pb-13 border-t-1 pt-2 border-white/25 ">
                    <h6 className="text-white md:text-3xl font-bold text-xl">Here The Result</h6>
                    <div className="flex w-full md:mt-7 md:mb-5 mb-2 mt-4 gap-2">
                        <button 
                            onClick={() => navigate("/")} 
                            className="border-2 border-white md:text-2xl md:h-13 h-10 w-1/2 text-white px-4 py-2 rounded-full"
                        >
                            Restart
                        </button>
                        <button 
                            onClick={() => navigate(-1)} 
                            className="border-2 border-white md:text-2xl md:h-13 w-1/2 h-10 text-white px-4 py-2 rounded-full"
                        >
                            Kembali
                        </button>
                    </div>
                    <button 
                        onClick={() => navigate("/donations")} 
                        className="bg-red-400 h-10 md:text-2xl md:h-13 md:font-bold text-white px-4 py-2 rounded-full"
                    >
                        Donations
                    </button>
                </div>
            </div>
        </>
    );
}
