import { useEffect, useState } from "react";

export default function ExampleUseEffect() {
    // const [age, setAge] = useState(0);
    // const handleClick = () => setAge(age+1);


    // useEffect(() => {
    //     document.title = 'You are '+age + 'years old!';
    //     const clicked = () => console.log('window clicked');
    //     window.addEventListener('click', clicked);
    //     return () => {
    //       window.removeEventListener('click', clicked);
    //     }
    // }, [age]);


    // useEffect(() => {
    //   const clicked = () => console.log('Window clicked');
    //   window.addEventListener('click', clicked);
    //   return () => {
    //     window.removeEventListener('click', clicked);
    //   }
    // }, []);


    // useEffect(() => {
    //   console.log("Another useEffect call");
    // });


    const [randomNumber, setRandomNumber] = useState(0);
    const [effectLogs, setEffectLogs] = useState<string[]>([]);

    useEffect(
      () => {
        setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked']);
      },[randomNumber]
    )


  return (
    <>
      {/* <div className="border">
        <h1>Basic Side Effect</h1>
        <p> Look at the title of the current tab in your browser </p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick}>Update Title!! </button>
      </div> */}

      {/* <div className="border">
        When you click the window you'll 
        find a message logged to the console
      </div> */}

      {/* <div className="border">
        <h1>Multiple Effects</h1>
        Check your console logs
      </div> */}

        <div className="border">
          <h1>{randomNumber}</h1>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              setRandomNumber(Math.random())
            }}
          >
            Generate random number!
          </button>
          <div>
            {effectLogs.map((effect, index) => (
              <div key={index}>{'🍔'.repeat(index) + effect}</div>
            ))}
          </div>
        </div>
    </>
  )
}
