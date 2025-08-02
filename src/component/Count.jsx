import Button from "./Button";
import CountRenderer from "./CountRenderer";
function Count(){
    console.log("Count component rendered");
    
      return (
         <div>
        <CountRenderer/>
            <Button   />
         </div>
      )
}

export default Count;