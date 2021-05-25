import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="p-4 bg-black rounded-xl">
        <div className="grid grid-cols-4 gap-4">
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" withAccent />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" withAccent />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" withAccent />
          <Button large label="0" />
          <Button label="." />
          <Button label="=" withAccent />
        </div>
      </div>
    </div>
  );
}

export default App;
