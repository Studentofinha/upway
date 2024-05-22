import Wrapper from "../Ui/Wrapper";
import SignUpImage from "../../assets/dl.beatsnoop 1.svg"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {useState} from "react";
import './sign-up.css'
import icongoogle from '../../assets/Icon-Google.png'

export default function SignUpComponent() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigator = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const body = {
            username: login,
            password: password
        }
        axios.post("https://capma.pythonanywhere.com/shop/register/", body)
            .then(res => {
                navigator("/")
            })
            .catch(err => {
                enqueueSnackbar("Ro'yxatdan o'tishda xatolik bor", {variant: "error"})
            })
    }
    return (
        <div className="sign-up">
            <Wrapper>
            <main>
        <section class="acount-item">
            <img class="acount-img" src={SignUpImage} alt=""/>
            <div class="creat-account">
                <h4>Ro'yhatdan o'tish</h4>
                <p class="p-text">Ma'lumotlaringizni kiriting</p>
                <form action="" onSubmit={handleRegister}>
                    <div class="user-box">
                    <input onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Ismingiz" id="name" required/>
                    <span id="error1"></span>
                </div>
                <div class="user-box">
                    <input type="email" placeholder="Email yoki telefon nomer" id="email" required/>
                    <span id="error2"></span>
                </div>
                <div class="user-box">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Parol" id="password"  required/>
                    <span id="error3"></span>
                </div>
                    <div>
                    <button type="submit" id="signup-btn" class="signup-btn">Ro'yhatdan o'tish</button>
                </div>
                <div class="btn2">
                    <button type="submit" class="signup-btn2">Google bilan ro'yxatdan o'ting</button>
                    <img src={icongoogle} alt=""/>
                </div>
                </form>
                <div class="already-account">
                    <p>Ro'yhatdan o'tganmisiz?</p>
                    <Link to='/login'>Parol</Link>
                </div>
            </div>
        </section>
    </main>
                {/* <div className={"h-screen flex items-center justify-center gap-[100px]"}>
                    <img src={SignUpImage} alt={"SignUpImage"} width={500}/>
                    <div className={"flex flex-col gap-[40px] justify-between"}>
                        <div className={"text-[36px] "}>
                            Ro'yhatdan o'tish
                        </div>
                        <p className={"text-[16px] font-medium"}>
                            Ma'lumotlaringizni kiriting
                        </p>
                        <form className={"flex flex-col gap-[40px]"} onSubmit={handleRegister}>
                            <input onChange={(e) => setLogin(e.target.value)} placeholder={"Login"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder={"Parol"}
                                   className={"border-b border-[#aaa] outline-none focus:outline-none py-2"}/>
                            <button className={"rounded-[5px] bg-[#db4444] text-white p-3 hover:bg-red-400 "}>Ro'yhatdan o'tish
                            </button>
                        </form>
                        <div className={"flex items-center justify-between"}>
                            <p>Ro'yhatdan o'tganmisiz?</p>
                            <Link to={"/login"} className={"border-b text-blue-500 border-blue-500"}>Parol</Link>
                        </div>
                    </div>
                </div> */}
            </Wrapper>
        </div>
    )
}