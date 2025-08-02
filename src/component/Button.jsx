import React, { useContext } from 'react';
import countContext from '../context';
function Button() {
    const { count, setCount } = useContext(countContext);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
        </div>
      )
}
export default Button