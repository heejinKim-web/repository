import React from "react";

const SongLink = ({ song, onRemove }) => {
  return (
    <li>
      <a href={song.link} target="_blank">
        {song.input}
      </a>
      <button className="remove_button" onClick={() => onRemove(song.id)}>
        삭제
      </button>
    </li>
  );
};

const Songs = ({
  input,
  link,
  songs,
  onInsert,
  onChangeInput,
  onChangeLink,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input, link);
    onChangeInput("");
    onChangeLink("");
  };
  const onChangeFirst = (e) => {
    onChangeInput(e.target.value);
  };
  const onChangeSecond = (e) => {
    onChangeLink(e.target.value);
  };

  console.log(songs);

  return (
    <div className="container">
      <div className="form_container">
        <form onSubmit={onSubmit}>
          <ul>
            <li>
              <p>노래 제목 : </p>
              <input type="text" value={input} onChange={onChangeFirst} />
            </li>
            <li>
              <p>가사 링크 : </p>
              <input type="text" value={link} onChange={onChangeSecond} />
            </li>
          </ul>
          <button type="submit">등록</button>
        </form>
      </div>
      <div className="songs_link">
        <ul>
          {songs &&
            songs.map((song) => (
              <SongLink key={song.id} song={song} onRemove={onRemove} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Songs;
