import { useDispatch, useSelector } from "react-redux";
import { increamentRequest, decreamentRequest } from "../modules/counter";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(decreamentRequest())}>- 1 </button>
      <button onClick={() => dispatch(increamentRequest())}>+ 1 </button>
    </div>
  );
}
