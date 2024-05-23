import "./about.css"
import portret from "../../assets/portret.png"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"

import { Link } from "react-router-dom";
import Footer from '../Home/Footer';
import TopHeader from "../Home/TopHeader";
import Header from "../Home/Header";

function About() {
    return(
        <div className="about-list">
            <TopHeader/>
      <Header/>
          <main className={"mt-[50px]"}>
        <div class="about-page">
            <Link to='/'>Bosh sahifa</Link>
            <p>/</p>
            <Link to='/about'>Biz haqimizda</Link>
        </div>
        <div class="our-story">
            <div class="our-story-text">
                <h2>Bizning Tariximiz</h2>
                <p class="our-story-p1">2024-yilda ishga tushirilgan UP-WAY O'zbekistonning faol taqdimoti bo'lgan eng yirik onlayn xarid qilish joyidir. Maxsus marketing, ma'lumotlar va xizmat ko'rsatish echimlarining keng doirasi bilan qo'llab-quvvatlanadigan UP-WAY mintaqa bo'ylab 3 million mijozlarga xizmat ko'rsatadi.</p>
                <p class="our-story-p2">
                    UP-WAYda 1 milliondan ortiq mahsulotlar mavjud bo'lib, ular juda tez o'sib bormoqda. UP-WAY iste'molchidan tortib toifadagi turli assortimentni taklif etadi.</p>
            </div>
            <img src={portret} alt=""/>
        </div>
        <div class="about-content">
            <div class="content">
                <img  src="" alt=""/>
                <h2>10.5k</h2>
                <p>Sotuvchilar saytimizda faol</p>
            </div>
            <div class="content">
                <img src="img/Services (7).png" alt=""/>
                <h2>33k</h2>
                <p>Oylik mahsulot sotuvi</p>
            </div>
            <div class="content">
                <img src="img/Services (4).png" alt=""/>
                <h2>45.5k</h2>
                <p>Saytimizda faol mijoz</p>
            </div>
            <div class="content">
                <img src="img/Services (5).png" alt=""/>
                <h2>25k</h2>
                <p>Bizning saytimizda yillik yalpi savdo</p>
            </div>
        </div>
        <div class="about-user">
            <div class="user">
                <img src={user1} alt=""/>
                <h2>Tom Cruise</h2>
                <p>Asoschisi va Raisi</p>
                <div class="iconca-user">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
            </div>
            <div class="user">
                <img src={user2} alt=""/>
                <h2>Emma Watson</h2>
                <p>Boshqaruvchi direktor</p>
                <div class="iconca-user">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
            </div>
            <div class="user">
                <img src={user3} alt=""/>
                <h2>Will Smith</h2>
                <p>
                    Mahsulot dizayneri</p>
                    <div class="iconca-user">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </div>
            </div>
        </div>
    </main>
    <Footer/>
        </div>
    )
}

export default About;