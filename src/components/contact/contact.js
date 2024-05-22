import "./contact.css";
import { Link } from "react-router-dom";
import React from 'react';
import Footer from '../Home/Footer';
import TopHeader from "../Home/TopHeader";
import Header from "../Home/Header";
import "../../fontawesome-free-6.5.1-web/css/all.min.css"

const Contact = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <main className={"mt-[50px]"}>
        <div class="contact-page">
            <Link to='/'>Bosh sahifa</Link>
            <p>/</p>
            <Link to='/contact'>Kontakt</Link>
        </div>
        <div class="contact-container">
<div class="contact-about">
          <div class="about">
            <i class="fa-solid fa-phone"></i>
            <p>Bizga qo'ng'iroq qiling</p>
          </div>
          <p class="contact-p">Biz haftada 7 kun, 24/7 ishlaymiz.</p>
          <p class="contact-p">Telefon: +998999264754</p>
          <hr class="contact-hr"/>
          <div class="about">
            <i class="fa-regular fa-envelope"></i>
            <p>Bizga yozing</p>
          </div>
          <p class="contact-p">Shaklimizni to'ldiring va biz 24 soat ichida siz bilan bog'lanamiz.</p>
          <p class="contact-p">Email: dilafruzaliyeva0309@gmail.com</p>
          <p class="contact-p">Email: up-way@mail.com</p>
</div>
<form class="main-form" action="">
    <input className={"border-[0.2px] border-black"} type="text" placeholder="Ismingiz"/>
    <input className={"border-[0.2px] border-black"} type="email" placeholder="Email"/>
    <input className={"border-[0.2px] border-black"} type="text" placeholder="Telefoningiz"/>
    <textarea className={"border-[0.2px] border-black"} placeholder="Izoh" name="fgg" id="" cols="30" rows="10"></textarea>
    <button>Xabar yuborish</button>
</form>
        </div>
    </main>
      <Footer/>
    </div>
  )
}

export default Contact
