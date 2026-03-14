import React, { useState } from "react";
import classnames from "classnames";

const Songs = () => {
  const songList = [
    { id: 1, name: "Bloodflower" },
    { id: 2, name: "Stellar Tombs" },
    { id: 3, name: "Heavy Lies the Crown" },
  ];

  const [activeSong, setActiveSong] = useState(1);

  return (
    <section className="section last">
      <div className="section-title">
        <h2>Songs</h2>
      </div>
      <div className="container">
        <div className="songs-tab">
          {songList.map((song) => {
            return (
              <button
                className={classnames("button", {
                  active: activeSong === song.id,
                })}
                key={song.id}
                onClick={() => setActiveSong(song.id)}
              >
                {song.name}
              </button>
            );
          })}
        </div>
        {activeSong === 1 && (
          <div className="song-tab-content">
            <div className="song-link">
              <a
                href="https://www.youtube.com/watch?v=j-Yp43QgSgs&list=RDj-Yp43QgSgs&start_radio=1"
                target="blank"
                title="play"
              >
                <img
                  className="play-button"
                  src="/img/play-button.png"
                  alt="play song"
                />
                <img src="/img/play1.png" alt="play song" />
              </a>
            </div>
          </div>
        )}
        {activeSong === 2 && (
          <div className="song-tab-content">
            <div className="song-link">
              <a
                href="https://www.youtube.com/watch?v=bQlboFvHGQ4&list=RDbQlboFvHGQ4&start_radio=1"
                target="blank"
                title="play"
              >
                <img
                  className="play-button"
                  src="/img/play-button.png"
                  alt="play song"
                />
                <img src="/img/play2.png" alt="play song" />
              </a>
            </div>
          </div>
        )}
        {activeSong === 3 && (
          <div className="song-tab-content">
            <div className="song-link">
              <a
                href="https://www.youtube.com/watch?v=yEf6q2Y9asU&list=RDyEf6q2Y9asU&start_radio=1"
                target="blank"
                title="play"
              >
                <img
                  className="play-button"
                  src="/img/play-button.png"
                  alt="play song"
                />
                <img src="/img/play3.png" alt="play song" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Songs;
