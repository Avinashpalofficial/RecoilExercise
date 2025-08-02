import React, { useContext } from 'react';
import countContext from '../context';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import countAtom from '../store/atoms/count.jsx';
import { useRecoilState } from 'recoil';
function Button() {
//    const [count,setCount] = useRecoilState(countAtom);
const setCount = useSetRecoilState(countAtom);
    console.log("Button component rendered");      // / This will log every time the Button component is rendered   thai is problem in this method so  we use 
                                                    //const setCount = useSetRecoilState(countAtom);  then button component will not re-render when count changes
    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>increase</button>
            <button onClick={() => setCount(count => count - 1)}>decrease</button>
        </div>
      )
}
export default Button