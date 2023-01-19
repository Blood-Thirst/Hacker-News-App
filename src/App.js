import "./App.css";
import Header from "../src/components/Header";
import NewsTable from "../src/components/NewsTable";
import Filter from "./components/Filter";
function App() {
  return (
    <div className="App" style={{ marginLeft: "0%" }}>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <Header />
      <Filter />
      <NewsTable />
    </div>
  );
}

export default App;
