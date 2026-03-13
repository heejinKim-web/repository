import React, { useState } from "react";
import classnames from "classnames";

const Tabs = () => {
  const tablist = [
    { id: 1, title: "Music" },
    { id: 2, title: "Art" },
    { id: 3, title: "Books" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tabs-container">
      <div className="tab-list">
        {tablist.map((list) => (
          <button
            className={classnames("tab", { active: activeTab === list.id })}
            id={list.id}
            onClick={() => setActiveTab(list.id)}
          >
            {list.title}
          </button>
        ))}
      </div>
      {activeTab === 1 && (
        <div className={classnames("tab-content", { active: activeTab === 1 })}>
          Music
        </div>
      )}
      {activeTab === 2 && (
        <div className={classnames("tab-content", { active: activeTab === 2 })}>
          Art
        </div>
      )}
      {activeTab === 3 && (
        <div className={classnames("tab-content", { active: activeTab === 3 })}>
          Books
        </div>
      )}
    </div>
  );
};

export default Tabs;
