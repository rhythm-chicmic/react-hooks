import { useState } from 'react'

export default function ExampleUseState() {
    const [state, setState] = useState(0);
    const [age, setAge] = useState(19);
    const [siblingsNum, setSiblingsNum] = useState(10);
    const [data, setData] = useState({agee:19, siblingsNume: 4});
    


    const handleClick = (val:keyof typeof data) => {
        setData({
            ...data,
            [val]: data[val] +1 // TypeScript now knows the valid keys.
        })
    }
    const {agee, siblingsNume} = data;
    const handleAge = () => setAge(age + 1);
    const handleSiblingsNum = () => setSiblingsNum(siblingsNum +1);

    function onUseState() {
        setState(state + 1);
    }
  return (
    <>
        <div className='w-full h-screen duration-200'>
          <div className='flex'>
              <div className='bg-green-100 m-2'>
                <h3>Use State</h3>
                <h5> Increment Counter {state} </h5>
                <button className='border border-green-400 p-1' onClick={onUseState}>Add </button>
                </div>
          </div>
      <h1 className='text-3xl'>React Hooks and multiple state variables</h1>
        <div className='border'>
            <div>
                <p>Today i am {age} Years of Age</p>
                <p>I have {siblingsNum} siblings</p>
            </div>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleAge}>Get Older!</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSiblingsNum}>More Siblings!</button>
            </div>
        </div>
        <h1 className='text-3xl'>Use object state variable</h1>
        <div className='border'>
            <p>Today I am {agee} Years of Age</p>
            <p>I have {siblingsNume} siblings</p>

            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick.bind(null, 'agee')}>Get older!</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick.bind(null, 'siblingsNume')}>
                More siblings!
                </button>
            </div>
        </div>
      </div>

    </>
  )
}
