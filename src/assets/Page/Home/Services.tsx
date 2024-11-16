import { FaArrowRightLong } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { motion } from "motion/react"


const Services = () => {
    return (
        <div>
            <h1 style={{ textShadow: "5px 5px 8px rgba(0, 0, 0, 0.5)" }} className="text-4xl font-bold text-center my-20">Services</h1>
           <div className="flex items-center justify-around gap-10 mx-12">
           <motion.div
            initial={{y:50, scale:0.6}}
            whileInView={{y:0,scale:1}}
            transition={{duration:0.5}}
           className="border-b-4 text-center border-green-700 w-full">
            <button className="text-center"><CgDetailsMore size={100} /></button>
                <h1 className="text-[20px] my-7 font-baseFont">Face Recognize From Browser</h1>
                <motion.button
                initial={{scale:1,y:0}}
                whileHover={{scale:1.5,y:-10}}
                transition={{duration:0.5}}
                className="mx-auto text-center">< FaArrowRightLong /></motion.button>
            </motion.div>
           <motion.div
            initial={{y:50, scale:0.6}}
            whileInView={{y:0,scale:1}}
            transition={{duration:0.5}}
           className="border-b-4 text-center border-green-700 w-full">
            <button className="text-center"><CgDetailsMore size={100} /></button>
                <h1 className="text-[20px] my-7 font-baseFont">Genaret New Image</h1>
                <motion.button
                initial={{scale:1,y:0}}
                whileHover={{scale:1.5,y:-10}}
                transition={{duration:0.5}}
                className="mx-auto text-center">< FaArrowRightLong /></motion.button>
            </motion.div>
           <motion.div
           initial={{y:50, scale:0.6}}
           whileInView={{y:0,scale:1}}
           transition={{duration:0.5}}
           
           className="border-b-4 text-center border-green-700 w-full">
            <button className="text-center"><CgDetailsMore size={100} /></button>
                <h1 className="text-[20px] my-7 font-baseFont">Face Data Analysis</h1>
                <motion.button
                initial={{scale:1,y:0}}
                whileHover={{scale:1.5,y:-10}}
                transition={{duration:0.5}}
                className="mx-auto text-center">< FaArrowRightLong /></motion.button>
            </motion.div>
           </div>
        </div>
    );
};

export default Services;