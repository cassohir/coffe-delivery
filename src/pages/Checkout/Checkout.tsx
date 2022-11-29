import { CheckedLabel } from "./components/CheckedLabel/CheckedLabel";
import { InfoForm } from "./components/InfoForm/InfoForm";
import {
  CheckoutContainer,
  InfoAndPaymentContainer,
  ReviewAndSubmitContainer,
  ShopButton,
  BackToHome,
} from "./styles";
import { NavLink } from "react-router-dom";
import { ArrowSquareLeft } from "phosphor-react";

export function Checkout() {
  return (
    <>
      <BackToHome>
        <NavLink to="/" title="Home">
          <ShopButton>
            <ArrowSquareLeft size={48} weight="fill" />
          </ShopButton>
        </NavLink>
      </BackToHome>

      <CheckoutContainer>
        <InfoAndPaymentContainer>
          <h1>Complete seu Pedido</h1>
          <InfoForm />
        </InfoAndPaymentContainer>
        <ReviewAndSubmitContainer>
          <h1>Resumo do Pedido</h1>
          <CheckedLabel />
        </ReviewAndSubmitContainer>
      </CheckoutContainer>
    </>
  );
}
