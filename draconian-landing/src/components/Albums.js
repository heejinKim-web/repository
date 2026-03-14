import React from "react";

const Albums = () => {
  const albumsList = [
    {
      id: 1,
      img: "/img/album1.png",
      title: "Where Lovers Mourn",
      link: "https://en.wikipedia.org/wiki/Where_Lovers_Mourn",
    },
    {
      id: 2,
      img: "/img/album2.png",
      title: "Arcane Rain Fell",
      link: "https://en.wikipedia.org/wiki/Arcane_Rain_Fell",
    },
    {
      id: 3,
      img: "/img/album3.png",
      title: "The Burning Halo",
      link: "https://en.wikipedia.org/wiki/The_Burning_Halo",
    },
    {
      id: 4,
      img: "/img/album4.png",
      title: "Turning Season Within",
      link: "https://en.wikipedia.org/wiki/Turning_Season_Within",
    },
    {
      id: 5,
      img: "/img/album5.png",
      title: "A Rose for the Apocalypse",
      link: "https://en.wikipedia.org/wiki/A_Rose_for_the_Apocalypse",
    },
    {
      id: 6,
      img: "/img/album6.png",
      title: "Sovran",
      link: "https://en.wikipedia.org/wiki/Sovran",
    },
    {
      id: 7,
      img: "/img/album7.png",
      title: "Under a Godless Veil",
      link: "https://en.wikipedia.org/wiki/Under_a_Godless_Veil",
    },
  ];

  return (
    <section className="section">
      <div className="section-title">
        <h2>Albums</h2>
      </div>
      <div className="container album-container">
        {albumsList.map((album) => {
          return (
            <div className="album-card" key={album.id}>
              <a href={album.link} target="blank" title={album.title}>
                <div className="album-img">
                  <img src={album.img} alt={album.title} />
                </div>
                <p className="album-title">{album.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Albums;
