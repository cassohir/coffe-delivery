import { useState } from "react";
import { Product, ProductProps } from "../Product/Product";
import { ProductsListContainer } from "./styles";
import expressoTradicional from "../../assets/expresso-tradicional.svg";
import expressoGelado from "../../assets/expresso-gelado.svg";
import expressoCremoso from "../../assets/expresso-cremoso.svg";
import expressoAmericano from "../../assets/expresso-americano.svg";

import arabe from "../../assets/arabe.svg";
import cafeComLeite from "../../assets/cafe-com-leite.svg";
import capuccino from "../../assets/capuccino.svg";
import chocolateQuente from "../../assets/chocolate-quente.svg";
import cubano from "../../assets/cubano.svg";
import havaiano from "../../assets/havaiano.svg";
import irlandes from "../../assets/Irlandes.svg";
import latte from "../../assets/Latte.svg";
import macchiato from "../../assets/macchiato.svg";
import mocaccino from "../../assets/mocaccino.svg";

export function ProductList() {
  const [productsList, setProductsList] = useState([
    {
      id: 1,
      name: "Expresso Tradicional",
      price: 9.99,
      image: expressoTradicional,
      description: "O tradicional café feito com água quente e grãos moídos",
      type: ["TRADICIONAL"],
    },
    {
      id: 2,
      name: "Expresso Americano",
      price: 9.99,
      image: expressoAmericano,
      description: "Expresso diluído, menos intenso que o tradicional",
      type: ["TRADICIONAL"],
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      price: 9.99,
      image: expressoCremoso,
      description: "Café expresso tradicional com espuma cremosa",
      type: ["TRADICIONAL"],
    },
    {
      id: 4,
      name: "Expresso Gelado",
      price: 9.99,
      image: expressoGelado,
      description: "Bebida preparada com café expresso e cubos de gelo",
      type: ["TRADICIONAL", "GELADO"],
    },
    {
      id: 5,
      name: "Café com Leite",
      price: 9.99,
      image: cafeComLeite,
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      type: ["TRADICIONAL", "COM LEITE"],
    },
    {
      id: 6,
      name: "Latte",
      price: 19.99,
      image: latte,
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      type: ["TRADICIONAL", "COM LEITE"],
    },
    {
      id: 7,
      name: "Capuccino",
      price: 9.99,
      image: capuccino,
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
    },
    {
      id: 8,
      name: "Macchiato",
      price: 9.99,
      image: macchiato,
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
    },
    {
      id: 9,
      name: "Mocaccino",
      price: 9.99,
      image: mocaccino,
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      type: ["TRADICIONAL", "COM LEITE"],
    },
    {
      id: 10,
      name: "Chocolate Quente",
      price: 9.99,
      image: chocolateQuente,
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      type: ["ESPECIAL", "COM LEITE"],
    },
    {
      id: 11,
      name: "Cubano",
      price: 9.99,
      image: cubano,
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    },
    {
      id: 12,
      name: "Havaiano",
      price: 9.99,
      image: havaiano,
      description: "Bebida adocicada preparada com café e leite de coco",
      type: ["ESPECIAL"],
    },
    {
      id: 10,
      name: "Árabe",
      price: 9.99,
      image: arabe,
      description: "Bebida preparada com grãos de café árabe e especiarias",
      type: ["ESPECIAL"],
    },
    {
      id: 10,
      name: "Irlandês",
      price: 9.99,
      image: irlandes,
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      type: ["ESPECIAL", "ALCOÓLICO"],
    },
  ]);

  return (
    <ProductsListContainer>
      {productsList.map((product) => (
        <Product
          key={product.id}
          productName={product.name}
          productDescription={product.description}
          productPrice={product.price}
          productImage={product.image}
          productType={product.type}
        />
      ))}
    </ProductsListContainer>
  );
}
