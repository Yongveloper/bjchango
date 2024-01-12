import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import * as S from './Complete.styles';
import CenteredContainer from 'components/CenteredContainer';
import checkFilledIcon from 'images/CheckFilled.svg';

function Complete() {
  useAutoRedirectPage('/order', 3000);

  return (
    <CenteredContainer>
      <S.CheckIcon src={checkFilledIcon} alt="check-icon" />
      주문이 완료되었습니다.
    </CenteredContainer>
  );
}

export default Complete;
