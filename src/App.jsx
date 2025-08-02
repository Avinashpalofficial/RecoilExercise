import React, { useState } from "react";
import Count from "./component/Count";
import Button from "./component/Button";
import countContext from "./context";
import { RecoilRoot } from "recoil";
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
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
export default App; //         import React from 'react';
//       export const countContext = createContext(0);
