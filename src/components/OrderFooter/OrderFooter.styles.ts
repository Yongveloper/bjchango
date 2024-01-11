import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.device.mobile};
  bottom: 0;
  height: 170px;
  padding: 22px;
  border-radius: 20px 20px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.5s ease;

  .order-info-container {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const OrderButton = styled.button`
  width: 100%;
  height: 47.919px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  transition: 250ms ease background;
  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
  }
`;
