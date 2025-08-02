import { selector } from 'recoil';
import countAtom from './count.jsx';
const evenSelector = selector({
      key: 'evenSelector',
      get: ({get}) => {
         const count = get(countAtom);
         return count % 2 === 0; // Returns true if count is even, false if odd
      }
})
export default evenSelector;