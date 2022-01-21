import TopBar from "./components/TopBar";
import Counter from "./components/Counter";
import News from "./components/News";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="wrapper">
        <Counter />
        <News />
      </div>
    </div>
  );
};

export default App;
