import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import * as S from './Error.styles';

function Error() {
  const seconds = useAutoRedirectPage('/order', 3000);

  return (
    <S.ErrorContainer>
      <S.Text>주문에 실패하였습니다.</S.Text>
      <br />
      <S.Text>{seconds}초 후에 주문 페이지로 이동합니다.</S.Text>
    </S.ErrorContainer>
  );
}

export default Error;
