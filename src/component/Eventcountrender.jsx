import { useRecoilValue } from "recoil";
import countAtom from "../store/atoms/count.jsx";
function Eventcounterrender() {
    const count = useRecoilValue(countAtom);
      if (count % 2 === 0) {
        return  <div>it is even ={count}</div>

      }else{
        return <div>it is odd ={count}</div>
      }
    
}
export default Eventcounterrender;
