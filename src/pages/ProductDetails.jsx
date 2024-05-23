import TopHeader from "../components/Home/TopHeader";
import Header from "../components/Home/Header";
import Details from "../components/ProductDetails/Details";
import Footer from "../components/Home/Footer";
import './HomePage.css'

export default function ProductDetails() {
    return (
        <div className={"ProductDetails"}>
            <TopHeader/>
            <Header/>
            <Details/>
            <Footer/>
        </div>
    )
}