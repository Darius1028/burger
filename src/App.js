import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid main mt-5">
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
