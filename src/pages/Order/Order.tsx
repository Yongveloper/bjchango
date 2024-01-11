/* eslint-disable @typescript-eslint/no-unused-vars */
import OrderFooter from 'components/OrderFooter';
import * as S from './Order.styles';
import LogoImage from 'images/logo-small.svg';
import { useGetProductsQuery } from 'api/productsApi';
import ProductCard from 'components/ProductCard';
import ProductList from 'components/ProductList';
import Loader from 'components/Loader';
import ErrorText from 'components/ErrorText';

function Order() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      <S.Header>
        <S.Logo src={LogoImage} alt="Logo" />
      </S.Header>
      <S.Container>
        {isLoading && <Loader />}
        {isError && <ErrorText />}
        <ProductList>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              event={product.event}
              materialType={product.materialType}
              price={product.price}
            />
          ))}
        </ProductList>
      </S.Container>
      <OrderFooter />
    </>
  );
}

export default Order;
