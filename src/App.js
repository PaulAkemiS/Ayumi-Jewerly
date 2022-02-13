import { NavBar} from "./components/NavBar";
import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return( <> 
  < Header / >

  < NavBar / >
  
  < ItemListContainer title="Joyas" text="Esto es una tienda de joyería" />
 

  </>
)
}

export default App;