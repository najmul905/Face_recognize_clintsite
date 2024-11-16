import { motion } from "motion/react"
const About = () => {
    
    return (
        <div className="">
            <h1 style={{ textShadow: "5px 5px 8px rgba(0, 0, 0, 0.5)" }} className="text-4xl font-bold text-center my-20">
            About Us
            </h1>
            <div className="flex items-center mx-12 gap-8 overflow-hidden">
                <div className="w-[50%]">
                <motion.h1
                initial={{x:-200}}
                whileInView={{x:0}}
                transition={{duration:1,}}
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} className="text-3xl font-bold text-center mb-6 overflow-hidden py-2">What is Face Recognise AI ?</motion.h1>
                <motion.p
                initial={{y:50,scale:0.5}}
                whileInView={{y:0,scale:1}}
                transition={{duration:1,}}
                className="text-[20px] font-baseFont text-center">It's an AI tool that can find any face across the web using an image or video. It provides the corresponding website link, name of the person,
                create a customized poem, and more. It can even find contact details (email and phone number) just by entering the person's name.</motion.p>
                </div>
                <motion.div
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                className="w-[50%] overflow-hidden">
                    <img  className="shadow-lg h-[400px]  rounded-lg " src="AboutImage.jpg" alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;