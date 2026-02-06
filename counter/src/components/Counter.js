import { useDispatch, useSelector } from "react-redux";
import { increamentRequest } from "../modules/counter";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increamentRequest())}>+ 1 </button>
    </div>
  );
}
