import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../modules/post";

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.postReducer);

  return (
    <div>
      <button onClick={() => dispatch(fetchPostRequest())}>
        게시글 불러오기
      </button>

      {loading && <p>로딩중....</p>}
      {error && <p>{error}</p>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
