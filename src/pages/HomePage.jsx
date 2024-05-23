import TopHeader from "../components/Home/TopHeader"
import Header from "../components/Home/Header";
import Products from "../components/Home/Products";
import Services from "../components/Home/Services";
import Footer from "../components/Home/Footer";
import Slider from "../components/slider/slider"
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="HomePage">
            <TopHeader/>
            <Header/>
            <Slider/>
            <Products/>
            <Services/>
            <Footer/>
        </div>
    )
}