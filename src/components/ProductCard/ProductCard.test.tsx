import { renderWithProviders } from '__test__/renderWithProviders';
import ProductCard from './ProductCard';
import { screen } from '@testing-library/dom';

describe('<ProductCard />', () => {
  test('제품 이미지가 렌더링 되어야 함', () => {
    renderWithProviders(
      <ProductCard
        id="1"
        name="제품이름"
        event={0}
        materialType={1}
        price={10000}
      />
    );

    const productImg = screen.getByTestId('product-img');

    expect(productImg).toBeInTheDocument();
  });

  test('제품 이름이 렌더링 되어야 함', () => {
    renderWithProviders(
      <ProductCard
        id="1"
        name="제품이름"
        event={0}
        materialType={1}
        price={10000}
      />
    );

    const productName = screen.getByText('제품이름');

    expect(productName).toBeInTheDocument();
  });
});
