import Button from "./Button";
import CountRenderer from "./CountRenderer";
import Eventcounterrender from "./Eventcountrender";
function Count(){
    console.log("Count component rendered");
    
      return (
         <div>
        <CountRenderer/>
        <Button   />
        <Eventcounterrender/>
         </div>
      )
}

export default Count;