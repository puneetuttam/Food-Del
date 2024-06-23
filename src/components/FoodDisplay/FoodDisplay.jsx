// import { useContext } from "react";
// import "./FoodDisplay.css";
// import StoreContextProvider, { StoreContext } from "../../context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";


// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);
//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top dishes near you</h2>
//       {food_list.map((item, index) => {
//         return (
//           <FoodItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             description={item.description}
//             price={item.price}
//           ></FoodItem>
//         );
//       })}
//     </div>
//   );
// };
// export default FoodDisplay;
