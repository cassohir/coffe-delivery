import artCoffee from "../../assets/art-coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  MainContainer,
  IconFeature,
  TitlesContainer,
  BoxFeatures,
} from "./styles";

export function Main() {
  return (
    <MainContainer>
      <div>
        <TitlesContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </h4>
        </TitlesContainer>
        <BoxFeatures>
          <ul>
            <li>
              <IconFeature color="yellowDark">
                <ShoppingCart weight="fill" size={16} />
              </IconFeature>
              Compra Simples e segura
            </li>
            <li>
              <IconFeature color="baseText">
                <Package size={16} weight="fill" />
              </IconFeature>
              Embalagem mantém o café intacto
            </li>
          </ul>
          <ul>
            <li>
              <IconFeature color="yellowBrand">
                <Timer size={16} weight="fill" />
              </IconFeature>
              Entrega Rápida e rastreada
            </li>
            <li className="coffee">
              <IconFeature color="purpleBrand">
                <Coffee size={16} weight="fill" />
              </IconFeature>
              O café chega fresquinho até você
            </li>
          </ul>
        </BoxFeatures>
      </div>
      <img src={artCoffee} alt=""></img>
    </MainContainer>
  );
}
