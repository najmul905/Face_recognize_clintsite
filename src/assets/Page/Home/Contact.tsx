
const Contact = () => {
    return (
        <div className="my-20">
            <h1 style={{ textShadow: "5px 5px 8px rgba(0, 0, 0, 0.5)" }} className="text-4xl font-bold text-center font-baseFont mb-4">Join our waiting list now!</h1>
            <p className="text-center mb-7 text-2xl">Sign up now to be the first one to get notified when <br /> $AiSearch Token goes live.</p>
            <div className="flex items-center justify-center gap-5 ">
        <input className="w-1/2  rounded-lg py-4 px-2 bg-black text-white" placeholder="Enter your Email" type="email" name="" id="" /><button className="bg-slate-700 text-white px-5 py-2 rounded-lg">SingIn</button>
            </div>
        </div>
    );
};

export default Contact;