 import React, { useState } from 'react'
import Count from './component/Count'
import Button from './component/Button'
import countContext from './context';

// function App(){
//      const [count ,setCount] = useState(0)
//      const [inputValue, setInputValue] = useState(0)

//        return (
//           <div>
//              <input type="number" onChange={(e) => setInputValue(Number(e.target.value))}/>
//              <h2>sum is: {count} </h2>
//               <button onClick={()=> setCount(inputValue*(inputValue + 1) / 2)}>counter</button>    
//           </div>
//        )
// }

// export default App

function App() {
   const [count, setCount] = useState(0);
    return (
         <div>
            <countContext.Provider value={{ count,setCount }}>
               <Count  />
            {/* <Button setCount={setCount} count={count} /> */}

            </countContext.Provider>
            
         </div>
    )
}
export default App;                      //         import React from 'react';
                                         //       export const countContext = createContext(0);