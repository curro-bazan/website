import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </Header>
      {children}
    </Container>
  );
};

export default Layout;
