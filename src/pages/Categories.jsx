import TopHeader from "../components/Home/TopHeader";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import CategoriesComponent from "../components/Categories/CategoriesComponent";
import "./HomePage.css"

export default function Categories() {
    return (
        <div className="Categories">
            <TopHeader/>
            <Header/>
            <CategoriesComponent/>
            <Footer/>
        </div>
    )
}