import React, { useContext } from 'react';
import countContext from '../context';
function CountRenderer() {
      const { count } = useContext(countContext);
    return (
        <div>
         
           <h2>Count: {count}</h2>
        </div>
    );
}

export default CountRenderer;