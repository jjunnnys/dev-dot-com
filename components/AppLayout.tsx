import React from 'react';
import Link from 'next/link';
import { Row, Col, Menu } from 'antd';

import styled from 'styled-components';

type AppLayoutProps = {
  children: React.ReactNode;
};

const CenterCol = styled(Col)`
  display: flex;
  justify-content: center;

  .center {
    width: 80%;
    background: lightgray;
  }
`;

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Row gutter={[30, 20]}>
        <Col xs={24}>
          <Row gutter={[10, 0]}>
            <Col xs={18}>
              <Menu mode="horizontal">
                <Menu.Item>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/team">
                    <a>Team</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/about">
                    <a>채용관</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/coding">
                    <a>코딩 강의</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/english">
                    <a>영어 강의</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/contact-us">
                    <a>contact us</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={6}>
              <Menu mode="horizontal">
                <Menu.Item>
                  <Link href="/auth/signin">
                    <a>로그인</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/auth/signup">
                    <a>회원가입</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/basket">
                    <a>장바구니</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <CenterCol span={24}>
          <div className="center">{children}</div>
        </CenterCol>
        <Col></Col>
      </Row>
    </>
  );
}

export default AppLayout;
