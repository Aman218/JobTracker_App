import Sidebar from "./Sidebar";
import JobApplicationCard from "./JobApplicationCard";
import './Body.css';
import { useState } from "react";
import { jobApplications } from "../utils/jobApplications";
function Body(){
    const [data,setData]=useState(jobApplications);
    return (
        <>
           <div id="body-container" className="flex w-[100%] mx-auto my-1 mt-[0.8rem] p-1.5">
               <div id="left-section" className="w-[25%]">
                
                  <Sidebar setData={setData}/>
               </div>
               <div id="right-section" className="w-[75%]  p-[0.2rem]">
              
                 <JobApplicationCard data={data}/>
               </div>
           </div>

        </>
    )
}
export default Body;