import { NavBar} from "./components/NavBar";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemListContainer";

function App() {
  return( <> 
  < Header / >

  < NavBar / >
  
  < ItemList title="Joyas" text="Esto es una tienda de joyería" />
  


  </>
)
}

export default App;