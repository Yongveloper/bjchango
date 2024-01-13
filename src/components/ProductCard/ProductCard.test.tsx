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

  test('제품 가격이 렌더링 되어야 함', () => {
    renderWithProviders(
      <ProductCard
        id="1"
        name="제품이름"
        event={0}
        materialType={1}
        price={10000}
      />
    );

    const productPrice = screen.getByTestId('product-price');

    expect(productPrice).toBeInTheDocument();
  });

  test('이벤트일 때 이벤트 태그가 렌더링 되어야 함', () => {
    renderWithProviders(
      <ProductCard
        id="1"
        name="제품이름"
        event={1}
        materialType={1}
        price={10000}
      />
    );

    const eventTag = screen.getByText('이벤트');

    expect(eventTag).toBeInTheDocument();
  });

  test('이벤트가 아닐 때 이벤트 태그가 렌더링 되지 않아야 함', () => {
    renderWithProviders(
      <ProductCard
        id="1"
        name="제품이름"
        event={0}
        materialType={1}
        price={10000}
      />
    );

    const eventTag = screen.queryByText('이벤트');

    expect(eventTag).not.toBeInTheDocument();
  });
});
