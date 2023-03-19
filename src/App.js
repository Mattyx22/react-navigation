import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>Text</Button>
      </div>
      <div>
        <Button secondary outline>Buy now</Button>
      </div>
      <div>
        <Button success>Test</Button>
      </div>
      <div>
        <Button warning>Something else</Button>
      </div>
      <div>
        <Button danger>123</Button>
      </div>
    </div>
  );
}

export default App;
