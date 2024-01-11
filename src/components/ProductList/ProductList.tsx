import * as S from './ProductList.styles';

interface IProductListProps {
  children: React.ReactNode;
}

function ProductList({ children }: IProductListProps) {
  return <S.Container>{children}</S.Container>;
}

export default ProductList;
