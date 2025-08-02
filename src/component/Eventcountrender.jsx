import { useRecoilValue } from "recoil";
import countAtom from "../store/atoms/count.jsx";
import evenSelector from "../store/atoms/selector.jsx";
function Eventcounterrender() {
    // const count = useRecoilValue(countAtom);
    // console.log("Eventcounterrender component rendered");
    
    //   if (count % 2 === 0) {
    //     return  <div>it is even ={count}</div>

    //   }else{
    //     return <div>it is odd ={count}</div>
    //   }

   /// betterMethod
      const isEven = useRecoilValue(evenSelector);
      console.log("Eventcounterrender component rendered");
      return <div>{isEven ? "it is even" : null}</div>
}
export default Eventcounterrender;
