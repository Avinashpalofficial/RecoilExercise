import React, { useContext } from 'react';
import countContext from '../context';
import { useRecoilValue } from 'recoil';
import countAtom from '../store/atoms/count.jsx';
import { useRecoilState } from 'recoil';
function Button() {
    const [count,setCount] = useRecoilState(countAtom);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
        </div>
      )
}
export default Button