import React from "react";

import ProductGrid from "simulador/components/organisms/ProductGrid";
import car1 from "simulador/assets/car1.jpg";
import car2 from "simulador/assets/car2.jpg";
import car3 from "simulador/assets/car3.jpg";

export default {
  title: "Components/Organisms/ProductGrid ",
  component: ProductGrid,
}

export const usege = () => (
  <ProductGrid products={[
    {id:1, title:"porschie", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car1},
    {id:2, title:"lamborguine", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
    {id:3, title:"ferrari", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car3},
    {id:4, title:"porschie", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car3},
    {id:5, title:"lamborguine", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car1},
    {id:6, title:"ferrari", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
    {id:7, title:"porschie", summary:"Ullamco Lorem laboris veniam occaecat esse ut elit est.", image:car2},
  ]} ></ProductGrid>
);
