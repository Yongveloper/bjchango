/* eslint-disable @typescript-eslint/no-unused-vars */
import OrderFooter from 'components/OrderFooter';
import * as S from './Order.styles';
import LogoImage from 'images/logo-small.svg';
import { useGetProductsQuery } from 'api/productsApi';
import ProductCard from 'components/ProductCard';
import ProductList from 'components/ProductList';
import Loader from 'components/Loader';

function Order() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  console.log(products);

  return (
    <>
      <S.Header>
        <S.Logo src={LogoImage} alt="Logo" />
      </S.Header>
      <S.Container>
        {!isLoading && <Loader />}
        {/* {isError && <p>데이터를 불러오지 못했습니다.</p>}
        <ProductList>
          {products?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              event={product.event}
              materialType={product.materialType}
              price={product.price}
            />
          ))}
        </ProductList> */}
      </S.Container>
      <OrderFooter />
    </>
  );
}

export default Order;
