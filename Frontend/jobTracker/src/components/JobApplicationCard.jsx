import { jobApplications } from "../utils/jobApplications";
import './JobApplicationCard.css';
import SpecificCard from "./SpecificCard";
function JobApplicationCard(props){

    return (
        <>
           <div id='application-cont'>
           {props.data.length > 0 ? (
                props.data.map((application) => (
                    <SpecificCard key={application.id} application={application} />
                ))
            ) : (
                <div id="no-results">
                    <p className="font-bold text-[0.8rem]" >No applications found matching your criteria</p>
                </div>
            )}
           </div>
             
        </>
    )
}
export default JobApplicationCard;