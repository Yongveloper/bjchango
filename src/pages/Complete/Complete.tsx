import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import CenteredContainer from 'components/CenteredContainer';
import { ReactComponent as CheckFilledIcon } from 'images/CheckFilled.svg';
import * as S from './Complete.styles';

function Complete() {
  const seconds = useAutoRedirectPage('/order', 3000);

  return (
    <CenteredContainer>
      <CheckFilledIcon data-testid="check-icon" />
      <S.Text>주문이 완료되었습니다.</S.Text>
      <br />
      <S.Text>{seconds}초 후에 주문 페이지로 이동합니다.</S.Text>
    </CenteredContainer>
  );
}

export default Complete;
