import React, { useState } from "react";
import classnames from "classnames";

const Accordion = () => {
  const accList = [
    { title: "title1", content: "content1" },
    { title: "title2", content: "content2" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accList.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <button
              className={classnames("accordion-title", {
                active: activeIndex === index,
              })}
              onClick={() => handleActive(index)}
            >
              <p>{item.title}</p>
              <span className="button-icon">▼</span>
            </button>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
