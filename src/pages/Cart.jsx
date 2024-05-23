import TopHeader from "../components/Home/TopHeader";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import CartProducts from "../components/Cart/Cart";
import './HomePage.css'

export default function Cart() {
    return (
        <div className="Cart">
            <TopHeader/>
            <Header/>
            <CartProducts/>
            <Footer/>
        </div>
    )
}