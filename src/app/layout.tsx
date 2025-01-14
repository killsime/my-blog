'use client';

import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./globals.css";


const { Header, Content } = Layout;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const menuItems = [
    { key: '/', label: <Link href="/">首页</Link> },
    { key: '/blog', label: <Link href="/blog">博客</Link> },
    { key: '/notes', label: <Link href="/notes">笔记</Link> },
    { key: '/hobbies', label: <Link href="/hobbies">爱好</Link> },
  ];

  return (
    <html lang="en">
      <body>
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[pathname === '/' ? '/' : pathname]} // 选中当前路径
              items={menuItems}
            />
          </Header>
          <Content style={{ padding: '24px', textAlign: 'center' }}>
            {children}
          </Content>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
