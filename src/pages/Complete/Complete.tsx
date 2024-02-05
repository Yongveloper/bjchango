import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import CenteredContainer from 'components/CenteredContainer';
import { ReactComponent as CheckFilledIcon } from 'images/CheckFilled.svg';

function Complete() {
  useAutoRedirectPage('/order', 3000);

  return (
    <CenteredContainer>
      <CheckFilledIcon />
      주문이 완료되었습니다.
    </CenteredContainer>
  );
}

export default Complete;
