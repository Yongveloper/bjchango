import * as S from './Complete.styles';
import checkFilledIcon from 'images/CheckFilled.svg';

function Complete() {
  return (
    <S.CompleteContainer>
      <S.CheckIcon src={checkFilledIcon} alt="check-icon" />
      주문이 완료되었습니다.
    </S.CompleteContainer>
  );
}

export default Complete;
