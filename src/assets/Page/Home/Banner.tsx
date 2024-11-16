import { motion } from "motion/react"

const Banner = () => {
    const bgImage = 'scanner.gif'; // Path to your background image (e.g., in the public folder)

    const bannerStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover', // Ensures the image covers the entire container
      backgroundPosition: 'center', // Center the image
      height: '100vh', // Set the height of the container
      
    };

    return (
        <div style={bannerStyle} className="">
           <div className="bg-black bg-opacity-40">
          <div className="flex flex-col items-center justify-center h-[100vh]"> 
             <h1 className="text-[50px] font-bold text-white">Face Recognize AI</h1>
             <img className="h-24 w-24 rounded-full my-10" src="scanner.gif" alt="" />
             <h1 className="text-2xl font-semibold font-baseFont text-white">Use a single photo to find all the images of yourself on the internet.</h1>
             <motion.button
             initial={{y:0}}
             whileHover={{y:-10}}
             whileTap={{scale:0.8}}
             className="bg-white text-[18px] font-semibold px-12 py-3 rounded-full mt-5 flex items-center gap-3 font-logo"><img className="h-5 w-5" src="btnImage.png" alt="btnImage" /> Try FaceRecognige AI</motion.button>
            </div>
           </div>
        </div>
    );
};

export default Banner;