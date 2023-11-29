import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = () => {

  return (
    <>
      <Header
        title = 'Exercise'
        subtitle = 'First React App'
      />

      <Main/>

      <Footer
        year = '2023'
        author = 'Calin'
      />
    </>
  )
}

export default App