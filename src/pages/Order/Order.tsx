import OrderFooter from 'components/OrderFooter';
import * as S from './Order.styles';
import LogoImage from 'images/logo-small.svg';
import { useGetProductsQuery } from 'api/productsApi';

function Order() {
  const { data: products, isLoading } = useGetProductsQuery();

  console.log(products);

  return (
    <>
      <S.Header>
        <S.Logo src={LogoImage} alt="Logo" />
      </S.Header>
      <S.Container>
        {!isLoading && (
          <p>
            목록을
            <br />
            불러오고 있습니다.
          </p>
        )}
      </S.Container>
      <OrderFooter />
    </>
  );
}

export default Order;
