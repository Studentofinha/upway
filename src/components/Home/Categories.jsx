import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        axios.get("https://capma.pythonanywhere.com/shop/category-list")
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className={"pt-[50px]"}>
            <div className={"max-w-[1200px] mx-auto"}>
                <div className={"flex items-center gap-[10px]"}>
                    <p className={"h-[30px] w-[15px] rounded-[5px] bg-[#DB4444]"}></p>
                    <p className={"text-[#DB4444] font-semibold text-[16px]"}>Kategoriyalar</p>
                </div>
                <div className={"text-[36px] font-medium mt-[20px]"}>Turkum Bo'yicha Ko'rib Chiqish</div>
                <div className={"mt-[30px] flex justify-between"}>
                    {
                        categories.map((el) => (
                            <div key={el.id} onClick={() => navigator(`/categories/${el.id}`)}
                                 className={"w-[170px] h-[50px] pt-[12px] bg-[white] border border-[black] rounded text-center text-[16px]   hover:shadow-lg transition-all duration-300 hover:transition-all hover:duration-300 cursor-pointer  hover:border hover:border-[#aaa] hover:bg-[#DB4444] hover:text-white "}>
                                {el.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}