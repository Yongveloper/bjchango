import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from 'api/productsApi';
import * as S from './ProductCard.styles';
import { addToCart, removeFromCart } from 'slices/cartSlice';
import { RootState } from 'store';

function ProductCard({ id, name, event, materialType, price }: IProduct) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(
    (state: RootState) => state.cart.items[id]?.quantity || 0
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, event, materialType, price }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <S.ProductCardContainer
      $isSelected={currentQuantity > 0}
      data-testid="product-card-container"
    >
      <S.ProductImage data-testid="product-img" />
      <S.Right>
        <S.ProductName>
          {name}
          {Boolean(event) && <S.EventTag>이벤트</S.EventTag>}
        </S.ProductName>
        <S.ProductInfo>
          <S.OrderQuantity>
            <S.Button onClick={handleRemoveFromCart}>-</S.Button>
            {currentQuantity}
            <S.Button onClick={handleAddToCart}>+</S.Button>
          </S.OrderQuantity>
          <S.ProductPrice data-testid="product-price">
            {price.toLocaleString()}
          </S.ProductPrice>
        </S.ProductInfo>
      </S.Right>
    </S.ProductCardContainer>
  );
}

export default ProductCard;
