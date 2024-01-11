import { IProduct } from 'api/productsApi';
import * as S from './ProductCard.styles';

function ProductCard({ id, name, event, materialType, price }: IProduct) {
  console.log(id, event, materialType);

  return (
    <S.Container>
      <S.ProductImage />
      <S.Right>
        <S.ProductName>
          {name}
          {Boolean(event) && <S.EventTag>이벤트</S.EventTag>}
        </S.ProductName>
        <S.ProductInfo>
          <S.OrderQuantity>
            <S.Button>-</S.Button>0<S.Button>+</S.Button>
          </S.OrderQuantity>
          <S.ProductPrice>{price.toLocaleString()}</S.ProductPrice>
        </S.ProductInfo>
      </S.Right>
    </S.Container>
  );
}

export default ProductCard;
