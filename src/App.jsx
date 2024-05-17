import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Sobre from "./Sobre"
import Contato from "./Contato"
import Header from "./Header"
import Rodape from "./Rodape"
import "./App.css"


const App = () => {
    return(
        <BrowserRouter>
        <Header/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
             </Routes>
             <Rodape/>
        </BrowserRouter>
    )
}
export default App;