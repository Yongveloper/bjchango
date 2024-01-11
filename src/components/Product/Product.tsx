import * as S from './Product.styles';

function Product() {
  return (
    <S.Container>
      <S.Left>
        <S.ProductImage />
        <S.ProductInfo>
          <S.ProductName>상품명</S.ProductName>
          <S.OrderQuantity>
            <S.Button>-</S.Button>1<S.Button>+</S.Button>
          </S.OrderQuantity>
        </S.ProductInfo>
      </S.Left>
      <S.ProductPrice>상품가격</S.ProductPrice>
    </S.Container>
  );
}

export default Product;
