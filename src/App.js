import Button from "./components/Button";

function App() {
  const onClick = (value) => {
    console.log({ value });
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="p-4 bg-black rounded-xl">
        <div className="text-white h-14 flex px-2 items-center justify-end bg-gray-700 mb-4 rounded bg-opacity-50">
          <p className="text-4xl">0</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Button onClick={onClick} value="clear" label="AC" extraLarge />
          <Button onClick={onClick} label="/" withAccent />
          <Button onClick={onClick} label="7" />
          <Button onClick={onClick} label="8" />
          <Button onClick={onClick} label="9" />
          <Button onClick={onClick} label="*" withAccent />
          <Button onClick={onClick} label="4" />
          <Button onClick={onClick} label="5" />
          <Button onClick={onClick} label="6" />
          <Button onClick={onClick} label="-" withAccent />
          <Button onClick={onClick} label="1" />
          <Button onClick={onClick} label="2" />
          <Button onClick={onClick} label="3" />
          <Button onClick={onClick} label="+" withAccent />
          <Button onClick={onClick} large label="0" />
          <Button onClick={onClick} label="." />
          <Button onClick={onClick} value="equal" label="=" withAccent />
        </div>
      </div>
    </div>
  );
}

export default App;
