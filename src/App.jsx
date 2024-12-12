import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {


  return (
    <>
      <div className='flex flex-col z-0 min-h-screen bg-custom-beige scroll-smooth'>
        <Header/>
        <Main/>
        <Footer/>
      </div>

    </>
  )
}

export default App
