import Wrapper from "../Ui/Wrapper";
import Cart from "../../assets/Cart1.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    const navigator = useNavigate()
    const cartProducts = useSelector(state => state.cart.cartProducts)

    return (
        <div className={"h-[70px] flex items-center border-b-2"}>
            <Wrapper>
                <div className={"flex items-center justify-between"}>
                    <div className={"font-bold text-[34px]"}>UPWAY</div>
                           <ul className={"flex gap-[35px] ml-[300px]"}>
           <li><Link to='/'>Bosh sahifa</Link></li>
            <li><Link to='/contact'>Kontakt</Link></li>
            <li><Link to='/about'>Biz haqimizda</Link></li>
        </ul>
        <form  action="">
            <input className={"w-[240px] h-[38px] bg-[#f5f5f5] outline-0 rounded-[4px] border-[none] pl-[20px] text-[12px]"} type="text" placeholder="Siz nimani izlayapsiz?" />
            
        </form>
                    <div className={"flex items-center gap-[30px]"}>
                        <div className={"relative"}>
                            <img src={Cart} alt={"Cart"} className={"cursor-pointer"}
                                 onClick={() => navigator("/cart")}/>
                            {
                                cartProducts.length > 0 &&
                                <span className={"absolute bg-red-500 rounded-[50%] text-white w-[25px] h-[25px] flex items-center justify-center -top-3 -right-3 text-[12px]"}>{cartProducts.length}</span>
                            }
                        </div>
                        <button
                            onClick={() => navigator("/login")}
                            className={"border py-2 px-6 rounded-[5px] bg-[#DB4444] hover:bg-red-400 transition-all duration-300 hover:transition-all hover:duration-300 text-white"}>Kirish
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
