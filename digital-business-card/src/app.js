import Info from "./components/info.js"
import About from "./components/about.js"
import Interests from "./components/interests.js"
import Footer from "./components/footer.js"
import "./app.css"

function App() {
    return (
        <div className="App">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App