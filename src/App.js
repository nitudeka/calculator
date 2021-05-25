import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import { setData } from "./slice";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const onClick = (value) => {
    switch (value) {
      case "clear":
        dispatch(setData(""));
        break;
      case "equal":
        onSubmit();
        break;
      default:
        dispatch(setData(data + value));
    }
  };

  const onSubmit = useCallback(() => {
    // eslint-disable-next-line
    const result = eval(data);
    dispatch(setData(result));
  }, [data, dispatch]);

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="p-4 bg-black rounded-xl">
        <div className="text-white overflow-x-scroll h-14 flex px-2 items-center justify-end bg-gray-700 mb-4 rounded bg-opacity-50">
          <p className="text-4xl">{data}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Button onClick={onClick} value="clear" label="AC" extraLarge />
          <Button onClick={onClick} value="/" label="/" withAccent />
          <Button onClick={onClick} value="7" label="7" />
          <Button onClick={onClick} value="8" label="8" />
          <Button onClick={onClick} value="9" label="9" />
          <Button onClick={onClick} value="*" label="*" withAccent />
          <Button onClick={onClick} value="4" label="4" />
          <Button onClick={onClick} value="5" label="5" />
          <Button onClick={onClick} value="6" label="6" />
          <Button onClick={onClick} value="-" label="-" withAccent />
          <Button onClick={onClick} value="1" label="1" />
          <Button onClick={onClick} value="2" label="2" />
          <Button onClick={onClick} value="3" label="3" />
          <Button onClick={onClick} value="+" label="+" withAccent />
          <Button onClick={onClick} value="0" large label="0" />
          <Button onClick={onClick} value="." label="." />
          <Button onClick={onClick} value="equal" label="=" withAccent />
        </div>
      </div>
    </div>
  );
}

export default App;
