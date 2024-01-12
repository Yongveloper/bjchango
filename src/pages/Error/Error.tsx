import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import * as S from './Error.styles';

function Error() {
  useAutoRedirectPage('/order', 3000);

  return (
    <S.ErrorContainer>
      주문에 실패하였습니다.
      <br />
      다시 시도해주세요.
    </S.ErrorContainer>
  );
}

export default Error;
