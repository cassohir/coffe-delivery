import {
  IconFeature,
  ImgContainer,
  InfoCard,
  SuccessContainer,
  TitleContainer,
} from "./styles";
import successImage from "../../assets/success.svg";
import {
  CurrencyDollar,
  MapPin,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoCard>
          <ul>
            <li>
              <IconFeature color="purpleBrand">
                <MapPin weight="fill" size={16} />
              </IconFeature>
              <p>
                Entrega em <strong>Rua Um , 188 </strong> <br /> Belo Vale -
                Justinópolis, MG
              </p>
            </li>
            <li>
              <IconFeature color="yellowBrand">
                <Timer size={16} weight="fill" />
              </IconFeature>
              <p>
                Previsão de entrega: <br /> <strong>20 min - 30 min</strong>
              </p>
            </li>
            <li>
              <IconFeature color="yellowDark">
                <CurrencyDollar size={16} weight="fill" />
              </IconFeature>
              <p>
                Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
              </p>
            </li>
          </ul>
        </InfoCard>
      </TitleContainer>
      <ImgContainer>
        <img src={successImage} alt="Success" />
      </ImgContainer>
    </SuccessContainer>
  );
}
