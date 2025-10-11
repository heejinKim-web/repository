import React from "react";
import { connect } from "react-redux";
import { changeInput, changeLink, insert, remove } from "../modules/songs";
import Songs from "../components/Songs";

const SongsContainer = ({
  input,
  link,
  songs,
  changeInput,
  changeLink,
  insert,
  remove,
}) => {
  return (
    <Songs
      input={input}
      link={link}
      songs={songs}
      onChangeInput={changeInput}
      onChangeLink={changeLink}
      onInsert={insert}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ songs }) => ({
    input: songs.input,
    link: songs.link,
    songs: songs.songs,
  }),
  {
    changeInput,
    changeLink,
    insert,
    remove,
  }
)(SongsContainer);
