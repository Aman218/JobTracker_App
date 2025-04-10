import { jobApplications } from "../utils/jobApplications";
import './JobApplicationCard.css';
import SpecificCard from "./SpecificCard";
import Shimmer from "./Shimmer";
function JobApplicationCard(props){

    return (
        <>
           <div id='application-cont'>
           {props.data.length > 0 ? (
                props.data.map((application) => (
                    <SpecificCard key={application._id} application={application} />
                ))
            ) : (
                
                 <Shimmer/>
              
            )}
           </div>
             
        </>
    )
}
export default JobApplicationCard;