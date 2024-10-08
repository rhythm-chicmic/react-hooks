import './App.css'
import ExampleUseContext from './components/ExampleUseContext'
// import ExampleUseEffect from './components/ExampleUseEffect'
// import ExampleUseState from './components/ExampleUseState'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
      {/* <ExampleUseState /> */}
      {/* <ExampleUseEffect /> */}
      <ExampleUseContext />
    </>
  )
}

export default App
