import OrderFooter from 'components/OrderFooter';
import * as S from './Order.styles';
import CenteredContainer from 'components/CenteredContainer';
import { ReactComponent as LogoImage } from 'images/logo-small.svg';
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
        <LogoImage data-testid="logo" />
      </S.Header>
      <CenteredContainer>
        {isLoading && <Loader />}
        {isError && <ErrorText />}
        {products && (
          <ProductList>
            {products.map((product) => (
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
        )}
      </CenteredContainer>
      <OrderFooter />
    </>
  );
}

export default Order;
