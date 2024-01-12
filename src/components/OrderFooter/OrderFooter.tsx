import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import * as S from './OrderFooter.styles';
import { resetCart } from 'slices/cartSlice';

function OrderFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const handleOrderButtonClick = () => {
    if (window.confirm('주문하시겠습니까?')) {
      // 주문API 로직 처리 후
      dispatch(resetCart());
      navigate('/complete');
    }
  };

  return (
    <S.Container>
      <div className="order-info-container">
        <span>총 수량 : {totalQuantity}개</span>
        <span>총 가격 : {totalPrice.toLocaleString()}원</span>
      </div>

      <S.OrderButton
        disabled={totalQuantity === 0}
        onClick={handleOrderButtonClick}
      >
        주문하기
      </S.OrderButton>
    </S.Container>
  );
}

export default OrderFooter;
