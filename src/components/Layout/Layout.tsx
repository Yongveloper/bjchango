import * as S from './Layout.styles';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Layout;
