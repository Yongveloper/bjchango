import * as S from './Order.styles';
import LogoImage from 'images/logo-small.svg';

function Order() {
  return (
    <>
      <S.Header>
        <S.Logo src={LogoImage} alt="Logo" />
      </S.Header>
      <S.Container>목록을 불러오는 중입니다.</S.Container>
    </>
  );
}

export default Order;
