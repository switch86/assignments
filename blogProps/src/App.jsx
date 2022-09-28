import './App.css'
import Card from "./components/Card.jsx"
import data from "./assets/Data.jsx"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Blog from "./components/Blog"

function App() {
  const card = data.map(item => {
    return (
      <Card
        key={item.id} 
        {...item}
        />
    )
  })
  function BlogPost() {
    return (
      <div className="BlogPosts">
        {card}
        <button className="Older">Older Posts</button>  
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Blog />
        <BlogPost />
      <Footer />
    </div>
  )
}

export default App
