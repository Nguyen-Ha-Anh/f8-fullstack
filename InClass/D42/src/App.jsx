import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "./store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const onClick = () => {
    dispatch(increase());
  };

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={onClick}>+</button>
    </>

  );
}

export default App;
