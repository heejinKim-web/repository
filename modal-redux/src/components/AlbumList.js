import React from "react";
import classnames from "classnames";

const AlbumList = ({
  isOpen,
  data,
  id,
  onSovran,
  onBloodInside,
  onSpritual,
  onClose,
}) => {
  return (
    <div className="album-container">
      <div
        className={classnames("album-item", id === 1 && "active")}
        onClick={onSovran}
      >
        <img src="/img/sovran.png" alt="sovran" />
        <p>Draconian - Sovran</p>
      </div>
      <div
        className={classnames("album-item", id === 2 && "active")}
        onClick={onBloodInside}
      >
        <img src="/img/blood-inside.jpg" alt="blood inside" />
        <p>Ulver - Blood Inside</p>
      </div>
      <div
        className={classnames("album-item", id === 3 && "active")}
        onClick={onSpritual}
      >
        <img src="/img/spritual-instinct.jpg" alt="spiritual instinct" />
        <p>Alcest - Spritual Instinct</p>
      </div>
    </div>
  );
};

export default AlbumList;
