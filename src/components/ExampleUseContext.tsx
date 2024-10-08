import { createContext, useContext } from "react"

const ExampleContext = createContext("Initial Value");
export default function ExampleUseContext() {

  return (
    <>
    <div>ExampleUseContext</div>
    <ExampleContext.Provider value="Updated Value">
        <ChildComponent />
    </ExampleContext.Provider>
    </>
  )
}


function ChildComponent(){
    const valueFromContext = useContext(ExampleContext);
    return <h1>{valueFromContext}</h1>
}
