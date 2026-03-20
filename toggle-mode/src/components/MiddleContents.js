import React from "react";
import classnames from "classnames";

const MiddleContents = ({ mode, onDark, onLight }) => {
  return (
    <section className={classnames("section", mode === true && "dark")}>
      <div className="container">
        <h1 className="title">title</h1>
        <div className="content">
          <p>
            힐마 아프 클린트(Hilma af Klint, 1862–1944)는 미술사의 기록을 새로
            쓴 최초의 추상화가로 평가받는 스웨덴의 여성 예술가입니다. 바실리
            칸딘스키나 피에트 몬드리안보다 앞서 추상화를 그렸음에도 불구하고,
            생전에는 자신의 작품이 당대 사람들에게 이해받지 못할 것이라 생각하여
            사후 20년 동안 작품을 공개하지 말라는 유언을 남겼습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddleContents;
