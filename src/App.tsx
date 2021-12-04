import React, { useState } from 'react';
import { useQuery } from 'react-query';
//components
import {
  LinearProgress,
  Drawer,
  Grid,
  Badge,
} from '@material-ui/core';
import Cart from './Cart/Cart';
import { AddShoppingCart } from '@material-ui/icons';
import Item from './Item/Item';
//styles
import {
  Wrapper,
  StyledButton,
} from './App.styles';
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<
  CartItemType[]
> =>
  await (
    await fetch(
      'https://fakestoreapi.com/products'
    )
  ).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    [] as CartItemType[]
  );

  const { data, isLoading, error } = useQuery<
    CartItemType[]
  >('products', getProducts);
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce(
      (ack: number, item) => ack + item.amount,
      0
    );

  const handleAddToCart = (
    clickedItem: CartItemType
  ) => {
    setCartItems(prev => {
      //is the item already in the cart?
      const isItemInCart = prev.find(
        item => item.id === clickedItem.id
      );

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      //item is added first time
      return [
        ...prev,
        { ...clickedItem, amount: 1 },
      ];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [
            ...ack,
            { ...item, amount: item?.amount - 1 },
          ];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div> Error</div>;
  return (
    <Wrapper>
      <div className='header'>
        <h3 className='heading'>
          Awesome Shopping
        </h3>
        <StyledButton
          onClick={() => setCartOpen(true)}
        >
          <Badge
            badgeContent={getTotalItems(
              cartItems
            )}
            color='error'
          >
            <AddShoppingCart />
          </Badge>
        </StyledButton>
      </div>
      <Drawer
        anchor='right'
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid
            item
            key={item?.id}
            xs={6}
            sm={4}
            xl={3}
          >
            <Item
              item={item}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
