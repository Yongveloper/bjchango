import { useSelector } from 'react-redux';
import { RootState } from 'store';
import * as S from './OrderFooter.styles';
function OrderFooter() {
  const { totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <S.Container>
      <div className="order-info-container">
        <span>총 수량 : {totalQuantity}개</span>
        <span>총 가격 : {totalPrice}원</span>
      </div>

      <S.OrderButton disabled={totalQuantity === 0}>주문하기</S.OrderButton>
    </S.Container>
  );
}

export default OrderFooter;
