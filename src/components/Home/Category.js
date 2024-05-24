// import React, {useEffect, useState} from "react";

// import './Category.css'
// import Rectangle18 from '../../assets/Rectangle 18.png'


// function Category(){

//     const [selectedFilters, setSelectedFilters] = useState([]);
//     const [filteredItems, setFilteredItems] = useState();
//     let filters = ["Sovutgich", "Changyutgich", "Mikroto'lqinli Pech", "Konditsioner", "Dazmol", "Ventilyator"];

//     const handleFilterButtonClick = (selectedCategory) =>{
//         if(selectedFilters.includes(selectedCategory)){
//             let filters = selectedFilters.filter((el) => el !== selectedCategory);
//             setSelectedFilters(filters);
//         }else{
//             setSelectedFilters([...selectedFilters, selectedCategory])
//         }
//     }

//     useEffect(()=>{
//         filteredItems();
//     },[selectedFilters]);

//     const filteredItems = () =>{
//         if(selectedFilters.length>0){
//             let tempItems = selectedFilters.map((selectedCategory) =>{
//                 let temp = items.filter((item)=>item.category === selectedCategory)
//                 return temp;
//             });
//             setFilteredItems(tempItems.flat());
//         }else{
//             setFilteredItems([...items]);
//         }
//     }

//     return(
//         <div>
//  <div class="category-content">
//         <div class="day">
//             <img src={Rectangle18} alt=""/>
//             <p>Kategoriyalar</p>
//         </div>
//             <div class="category-list">
//                 {filters.map((category, idx)=>(
//                       <div onClick={()=> handleFilterButtonClick(category)} className={`button ${selectedFilters?.includes(category) ? "active" : "" }`}  key={`filters-${idx}`} class="category-about">
//                         {category}
//                      </div>
//                 ))}
//          </div>
//     </div>
//         </div>
//     )
// }

// export default Category