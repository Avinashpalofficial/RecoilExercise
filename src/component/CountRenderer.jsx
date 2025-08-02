import React, { useContext } from 'react';
import countContext from '../context';
import { useRecoilValue } from 'recoil';
import  countAtom  from '../store/atoms/count.jsx';
import { RecoilRoot } from 'recoil';
import Eventcounterrender from './Eventcountrender.jsx';
function CountRenderer() {
      const count = useRecoilValue(countAtom);
    return (
        <div>
            
           <h2>Count: {count}</h2>
        
        </div>
    );
}

export default CountRenderer;