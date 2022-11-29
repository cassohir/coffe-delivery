import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useState } from "react";
import {
  FormContainerBox,
  TitlesForm,
  FormFields,
  PaymentMethods,
  SeparatorContainer,
  PaymentButton,
} from "./styles";
export function InfoForm() {
  const [isActive, setIsActive] = useState(false);
  function setButtonStatus() {
    setIsActive(!isActive);
  }
  return (
    <SeparatorContainer>
      <FormContainerBox>
        <TitlesForm>
          <MapPinLine size={22} />
          <h3>Endereço de Entrega</h3>
        </TitlesForm>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <FormFields>
          <input placeholder="CEP" type="text" id="cep" />
          <input placeholder="Rua" type="text" id="rua" />
          <input placeholder="Número" type="number" id="numero" />
          <input placeholder="Complemento" type="text" id="complemento" />
          <input placeholder="Bairro" type="text" id="bairro" />
          <input placeholder="Cidade" type="text" id="cidade" />
          <input placeholder="UF" type="text" id="state" />
        </FormFields>
      </FormContainerBox>
      <FormContainerBox>
        <TitlesForm>
          <CurrencyDollar size={22} weight="fill" />
          <h3>Pagamento</h3>
        </TitlesForm>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <PaymentMethods>
          <PaymentButton>
            <CreditCard size={22} />
            <input type="checkbox" name="credit" id="credit" />
            <label htmlFor="credit">
              <p> CARTÃO DE CRÉDITO</p>
            </label>
          </PaymentButton>
          <PaymentButton>
            <Bank size={22} />
            <input type="checkbox" name="debit" id="debit" />
            <label htmlFor="debit">
              <p> CARTÃO DE DÉBITO</p>
            </label>
          </PaymentButton>
          <PaymentButton>
            <Money size={22} />
            <input type="checkbox" name="money" id="money" />
            <label htmlFor="money">
              <p> Dinheiro</p>
            </label>
          </PaymentButton>
        </PaymentMethods>
      </FormContainerBox>
    </SeparatorContainer>
  );
}
