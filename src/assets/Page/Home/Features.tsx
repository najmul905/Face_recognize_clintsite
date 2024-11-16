import { motion } from "motion/react"

const Features = () => {
    return (
        <div>
            <h1 style={{ textShadow: "5px 5px 8px rgba(0, 0, 0, 0.5)" }} className="text-4xl font-bold text-center my-20">Feature</h1>
            <div className="flex items-center gap-12 mx-12 overflow-hidden">
                <motion.div
                initial={{x:-50,y:100,scale:0.5}}
                whileInView={{x:0,y:0,scale:1}}
                transition={{duration:1}}
                className="w-[50%] overflow-hidden"><img className="rounded-md" src="/feature.webp" alt="" /></motion.div>
                <div className="w-[50%]">
                    <motion.h1 initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="text-[40px] font-logo mb-6 " style={{ textShadow: "5px 5px 8px rgba(0, 0, 0, 0.5)" }}>How to use This website in your daily life..??</motion.h1>
                    <motion.h1 initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="mb-1 text-2xl font-baseFont">Step 1: Buy premium.</motion.h1>
                    <motion.p initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="text[18px] font-semibold">You can buy premium and enjoy our feature.</motion.p>
                    <motion.h1 initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="mb-1 text-2xl font-baseFont">Step 1: Use Free.</motion.h1>
                    <motion.p initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="text[18px] font-semibold">You can use free by watching add.</motion.p>
                    <motion.h1 initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="mb-1 text-2xl font-baseFont">Step 1: Free Credit.</motion.h1>
                    <motion.p initial={{y:20,scale:0.5}}
                    whileInView={{y:0,scale:1}}
                    transition={{duration:0.5}}
                    className="text[18px] font-semibold">Everyday you will get 3 credit for use it</motion.p>
                </div>
            </div>
        </div>
    );
};

export default Features;