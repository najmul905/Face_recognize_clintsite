import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className="w-full top-0 bg-slate-700 bg-opacity-85 text-white py-3 fixed flex items-center justify-around">
           <div className="flex items-center gap-4"><img className="h-10" src="btnImage.png" alt="" /> <h1 className="text-[18px] font-bold text-[#c6a87d] font-logo">Face Recognize</h1></div>
           <div className=" flex items-center gap-10"><Link to="/" className="text-[20px] font-baseFont font-bold">Home</Link><Link to="payment" className="bg-[#c6a87d] px-5 py-1 border-b-8 rounded-md font-baseFont">For Premium</Link></div>
        </div>
    );
};

export default Navbar;