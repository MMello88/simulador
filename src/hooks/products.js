import car1 from "simulador/assets/car1.jpg";
import car2 from "simulador/assets/car2.jpg";
import car3 from "simulador/assets/car3.jpg";

const products = [
  {id:1, slang: "porschie", title:"porschie", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car1},
  {id:2, slang: "lamborguine", title:"lamborguine", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
  {id:3, slang: "mercedes", title:"mercedes", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car3},
  {id:4, slang: "mclaren", title:"mclaren", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car3},
  {id:5, slang: "astomatic", title:"astomatic", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car1},
  {id:6, slang: "ferrari", title:"ferrari", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
  {id:7, slang: "RedBull", title:"RedBull", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
];

export const useProducts = () => {
  return products;
}

export const useProduct = ({ slang }) => {
  return products.find((p) => {
    return p.slang === slang;
  })
}