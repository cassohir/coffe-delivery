import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { ProductProps, Product } from "../Product/Product";
import { useState, createContext } from "react";
import {
  AmountProductButton,
  ChartContainer,
  ChartContainerButton,
  ProductButtons,
  ProductInfoContainer,
  ProductInfoTitles,
} from "./styles";

import expresso from "../../assets/expresso-tradicional.svg";
interface ChartContextType {
  // products: Product;
  addProduct: (product: ProductProps) => void;
  removeProduct: (product: ProductProps) => void;
}

export const ChartContext = createContext({} as ChartContextType);

export function Chart() {
  const [chartList, setChartList] = useState(1);
  const product = {
    id: 1,
    name: "Expresso Tradicional",
    price: 9.99,
    image: "https://i.imgur.com/qkKy8.jpg",
    description: "O tradicional café feito com água quente e grãos moídos",
    type: ["TRADICIONAL", "GELADO"],
  };
  function handleIncreaseChartList() {
    setChartList(chartList + 1);
  }
  function handleDecreaseChartList() {
    setChartList(chartList - 1);
    if (chartList <= 0) {
      setChartList(0);
    }
  }

  function handleAddToCart() {
    console.log(`${product.name} adicionado ao carrinho!`);
  }
  return (
    <ChartContext.Provider
      value={{
        addProduct: (product: ProductProps) => {},
        removeProduct: (product: ProductProps) => {},
      }}
    >
      <ChartContainer>
        <img src={expresso} alt="" />

        <ProductInfoContainer>
          <ProductInfoTitles>
            <h4>{product.name}</h4>
            <h4>R$ {String(product.price)}</h4>
          </ProductInfoTitles>

          <ProductButtons>
            <AmountProductButton>
              <button onClick={handleDecreaseChartList}>
                <Minus size={16} weight="fill" />
              </button>
              <span>{chartList}</span>
              <button onClick={handleIncreaseChartList}>
                <Plus size={16} weight="fill" />
              </button>
            </AmountProductButton>
            <ChartContainerButton>
              <Trash onClick={handleAddToCart} size={20} />
              REMOVER
            </ChartContainerButton>
          </ProductButtons>
        </ProductInfoContainer>
      </ChartContainer>
    </ChartContext.Provider>
  );
}
