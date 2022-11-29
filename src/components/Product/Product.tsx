import { ReactNode, useState } from "react";
import {
  ItemProductContainer,
  AmountProductButton,
  FooterCardProduct,
  ChartContainerButton,
  DescriptionProductContainer,
} from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
export interface ProductProps {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  productType: string[];
}

export function Product({
  productName,
  productDescription,
  productPrice,
  productImage,
  productType,
}: ProductProps) {
  const [amount, setAmount] = useState(0);

  function handleIncreaseAmount() {
    setAmount(amount + 1);
  }
  function handleDecreaseAmount() {
    setAmount(amount - 1);
    if (amount <= 0) {
      setAmount(0);
    }
  }

  function handleAddToCart() {
    alert(`${productName} adicionado ao carrinho!`);
  }

  return (
    <ItemProductContainer>
      <img src={productImage} alt="" />

      <h4>{productType[0]}</h4>
      <h2>{productName}</h2>
      <p>{productDescription}</p>

      <FooterCardProduct>
        R$
        <h3>{String(productPrice)}</h3>
        <AmountProductButton>
          <button onClick={handleDecreaseAmount}>
            <Minus size={16} weight="fill" />
          </button>
          <span>{amount}</span>
          <button onClick={handleIncreaseAmount}>
            <Plus size={16} weight="fill" />
          </button>
        </AmountProductButton>
        <ChartContainerButton onClick={handleAddToCart}>
          <ShoppingCart size={16} weight="fill" />
        </ChartContainerButton>
      </FooterCardProduct>
    </ItemProductContainer>
  );
}
