import { IProduct } from 'api/productsApi';
import * as S from './Product.styles';

function ProductCard({ id, name, event, materialType, price }: IProduct) {
  console.log(id, event, materialType);

  return (
    <S.Container>
      <S.Left>
        <S.ProductImage />
        <S.ProductInfo>
          <S.ProductName>{name}</S.ProductName>
          <S.OrderQuantity>
            <S.Button>-</S.Button>0<S.Button>+</S.Button>
          </S.OrderQuantity>
        </S.ProductInfo>
      </S.Left>
      <S.ProductPrice>{price.toLocaleString()}</S.ProductPrice>
    </S.Container>
  );
}

export default ProductCard;
