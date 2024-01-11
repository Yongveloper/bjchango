import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(247, 90, 47, 0.1);
  padding: 9px 12px;
  gap: 8px;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.div`
  width: 62px;
  height: 62px;
  background: ${({ theme }) => theme.colors.grey};
  flex-shrink: 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OrderQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button`
  margin-top: 4px;
`;

export const ProductPrice = styled.span`
  align-self: flex-end;
`;

export const EventTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: 53px;
  height: 23px;
  font-size: 13px;
  border-radius: 10px;
  background: #f75a2f;
`;
