import * as S from './ProductList.styles';

interface IProductListProps {
  children: React.ReactNode;
}

function ProductList({ children }: IProductListProps) {
  return <S.ProductListContainer>{children}</S.ProductListContainer>;
}

export default ProductList;
