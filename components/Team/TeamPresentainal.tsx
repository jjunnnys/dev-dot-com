import React from 'react';
import { TeamContent, TeamHeader, TeamImage, TeamItem } from './styles';

type TeamPresentainalProps = {};

function TeamPresentainal(props: TeamPresentainalProps) {
  return (
    <>
      <TeamHeader>
        <h1>Our Team</h1>
        <h2>The Passion Behind the Business</h2>
      </TeamHeader>
      <TeamContent>
        <TeamItem>
          <TeamImage>
            <img src="/images/3.webp" alt="" />
          </TeamImage>
          <dl>
            <dt>
              ​<h3>김한솔</h3>
              <h4>​프론트앤드 개발자</h4>
            </dt>
            <dd>
              <span>(현) 개발자닷컴 대표</span>
              <span>(현) 필드쉐어 개발 이사</span>
              <span>​개발 포트폴리오</span>
            </dd>
          </dl>
        </TeamItem>
        <TeamItem>
          <TeamImage>
            <img src="/images/2.webp" alt="" />
          </TeamImage>
          <dl>
            <dt>
              ​<h3>김한솔</h3>
              <h4>​프론트앤드 개발자</h4>
            </dt>
            <dd>
              <span>(현) 개발자닷컴 대표</span>
              <span>(현) 필드쉐어 개발 이사</span>
              <span>​개발 포트폴리오</span>
            </dd>
          </dl>
        </TeamItem>
        <TeamItem>
          <TeamImage>
            <img src="/images/1.webp" alt="" />
          </TeamImage>
          <dl>
            <dt>
              ​<h3>김한솔</h3>
              <h4>​프론트앤드 개발자</h4>
            </dt>
            <dd>
              <span>(현) 개발자닷컴 대표</span>
              <span>(현) 필드쉐어 개발 이사</span>
              <span>​개발 포트폴리오</span>
            </dd>
          </dl>
        </TeamItem>
      </TeamContent>
    </>
  );
}

export default TeamPresentainal;
