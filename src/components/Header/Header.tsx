import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <nav>
        <p>
          <MapPin weight="fill" size={22} />
          Belo Horizonte, MG
        </p>
        <NavLink to="/checkout" className="shoppingCart" title="Checkout">
          <ShoppingCart weight="fill" size={26} />
        </NavLink>
        <div>
          <h4>5</h4>
        </div>
      </nav>
    </HeaderContainer>
  );
}
