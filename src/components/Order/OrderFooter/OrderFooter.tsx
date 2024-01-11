import * as S from './OrderFooter.styles';
function OrderFooter() {
  return (
    <S.Container>
      <div className="order-info-container">
        <span>총 수량 : 0개</span>
        <span>총 가격 : 0원</span>
      </div>

      <button>주문하기</button>
    </S.Container>
  );
}

export default OrderFooter;
