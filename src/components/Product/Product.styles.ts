import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(247, 90, 47, 0.1);
  padding: 9px 12px;
`;

export const Left = styled.div`
  display: flex;
`;

export const ProductImage = styled.div`
  width: 62px;
  height: 62px;
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.grey};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.h1``;

export const OrderQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button``;

export const ProductPrice = styled.span`
  align-self: flex-end;
`;
