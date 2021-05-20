import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import {BurgerProvider} from "./context/burger-context";
import StoreProvider from "./store/storeProvider";



function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Header></Header>
        <div className="container-fluid main mt-5">
          <Main></Main>
        </div>
        <Footer></Footer>
      </div>
    </StoreProvider>
  );
}

export default App;
