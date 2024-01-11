import * as S from './Layout.styles';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <S.Container>{children}</S.Container>;
}

export default Layout;
