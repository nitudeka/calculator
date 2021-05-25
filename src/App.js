import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import { setData } from "./slice";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const buttons = useMemo(() => {
    return [
      { value: "clear", label: "AC", extraLarge: true },
      { value: "/", label: "/", withAccent: true },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "9", label: "9" },
      { value: "*", label: "*", withAccent: true },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "-", label: "-", withAccent: true },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "+", label: "+", withAccent: true },
      { value: "0", label: "0", large: true },
      { value: ".", label: "." },
      { value: "equal", label: "=", withAccent: true },
    ];
  }, []);

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
          {buttons.map((btn, i) => {
            return <Button key={i} onClick={onClick} {...btn} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
