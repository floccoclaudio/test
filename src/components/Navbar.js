import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  //   {
  //     /*cartItems, user, signOut*/
  //   }
  // ) {
  //   const getCount = () => {
  //     let count = 0;
  //     // cicla su cart items
  //     cartItems.forEach((item) => {
  //       // aggiunge la quantità del cart item al totale;
  //       count += item.product.quantity;
  //     });

  //     return count;
  //   };

  return (
    <Container>
      <HeaderNavItems>
        <OptionLineOne>Orders</OptionLineOne>

        <HeaderOptionCart>
          {/* <Link to="/cart"> */}
          {/* <ShoppingBasketIcon /> */}
          <CartCount>4{/* getCount() */}</CartCount>
          {/* </Link> */}
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: grey;
  display: flex;
  align-items: center;
  color: white;
`;

const OptionLineOne = styled.div`
  margin-left: 10px;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: whitesmoke;
`;
