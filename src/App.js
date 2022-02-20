import { NavBar} from "./components/NavBar";
import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return( <> 
  < Header / >

  < NavBar / >
  
  < ItemListContainer />

 < ItemDetailContainer />

  </>
)
}

export default App;