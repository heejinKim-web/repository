import React from "react";
import { connect } from "react-redux";
import { changeInput, changeLink, insert, remove } from "../modules/news";
import News from "../components/News";

const NewsContainer = ({
  input,
  link,
  newsList,
  changeInput,
  changeLink,
  insert,
  remove,
}) => {
  return (
    <News
      input={input}
      link={link}
      newsList={newsList}
      onChangeInput={changeInput}
      onChangeLink={changeLink}
      onInsert={insert}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ newsList }) => ({
    input: newsList.input,
    link: newsList.link,
    newsList: newsList.newsList,
  }),
  {
    changeInput,
    changeLink,
    insert,
    remove,
  },
)(NewsContainer);
