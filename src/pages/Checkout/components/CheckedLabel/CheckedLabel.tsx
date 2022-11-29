import {
  CurrencyDollar,
  MapPinLine,
  Minus,
  Plus,
  ShoppingCart,
} from "phosphor-react";
import { useState } from "react";
import {
  FormContainerBox,
  TitlesForm,
  SendReqButton,
  SubmitContainer,
  ChartContainer,
  OrderPriceContainer,
  OrderPrice,
} from "./styles";

import { Chart } from "../../../../components/Chart/Chart";
import { NavLink } from "react-router-dom";

export function CheckedLabel() {
  // This variable will come by context

  const [chartList, setChartList] = useState([
    { id: 1, amount: 1 },
    { id: 2, amount: 2 },
  ]);

  return (
    <FormContainerBox>
      <ChartContainer>
        {chartList.map((chart) => {
          return (
            <div key={chart.id}>
              <Chart />
            </div>
          );
        })}
      </ChartContainer>
      <OrderPriceContainer>
        <OrderPrice>
          <h4>Total de Itens</h4>
          <h4>R$ 25,99</h4>
        </OrderPrice>
        <OrderPrice>
          <h4>Entrega</h4>
          <h4>R$ 3,50</h4>
        </OrderPrice>
        <OrderPrice>
          <h2>Total</h2>
          <h4>R$ 29,49</h4>
        </OrderPrice>
      </OrderPriceContainer>

      <SubmitContainer>
        <NavLink to="/Success" title="Success">
          <SendReqButton>CONFIRMAR PEDIDO</SendReqButton>
        </NavLink>
      </SubmitContainer>
    </FormContainerBox>
  );
}
