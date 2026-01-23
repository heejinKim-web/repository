import React from "react";

const NewsLink = ({ news, onRemove }) => {
  return (
    <li>
      <a href={news.link} target="_blank">
        {news.input}
      </a>
      <button className="remove_button" onClick={() => onRemove(news.id)}>
        삭제
      </button>
    </li>
  );
};

const News = ({
  input,
  link,
  newsList,
  onChangeInput,
  onChangeLink,
  onInsert,
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

  return (
    <div className="news_container">
      <div className="form_container">
        <form className="form" onSubmit={onSubmit}>
          <ul>
            <li>
              <p>기사 제목 :</p>
              <input type="text" value={input} onChange={onChangeFirst} />
            </li>
            <li>
              <p>기사 링크 :</p>
              <input type="text" value={link} onChange={onChangeSecond} />
            </li>
          </ul>
          <button type="submit">등록</button>
        </form>
        <div className="news_link">
          <ul>
            {newsList &&
              newsList.map((news) => (
                <NewsLink key={news.id} news={news} onRemove={onRemove} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
