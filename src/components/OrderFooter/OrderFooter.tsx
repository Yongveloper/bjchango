import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import * as S from './OrderFooter.styles';
import { resetCart } from 'slices/cartSlice';

function OrderFooter() {
  const [isOrdering, setIsOrdering] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const handleOrderButtonClick = () => {
    if (window.confirm('주문하시겠습니까?')) {
      setIsOrdering(true);
      setTimeout(() => {
        // 주문API 로직 처리 후
        dispatch(resetCart());
        navigate('/complete');
      }, 1500);
    }
  };

  return (
    <S.OrderFooterContainer>
      <div className="order-info-container">
        <span>총 수량 : {totalQuantity}개</span>
        <span>총 가격 : {totalPrice.toLocaleString('ko-KR')}원</span>
      </div>

      <S.OrderButton
        disabled={totalQuantity === 0 || isOrdering}
        onClick={handleOrderButtonClick}
      >
        {isOrdering ? '로딩중...' : '주문하기'}
      </S.OrderButton>
    </S.OrderFooterContainer>
  );
}

export default OrderFooter;
