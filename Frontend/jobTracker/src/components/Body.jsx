import Sidebar from "./Sidebar";
import JobApplicationCard from "./JobApplicationCard";
import './Body.css';
import { useEffect, useState } from "react";
import { jobApplications } from "../utils/jobApplications";
function Body(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    async function fetchData(){
        let response=await fetch('https://jobtracker-app.onrender.com/getAllJobApplications');
        let finalData=await response.json();
        setData(finalData);
    }

    return (
        <>
           <div id="body-container" className="flex w-[100%] mx-auto my-1 mt-[0.8rem] p-1.5">
               <div id="left-section" className="w-[25%]">
                
                  <Sidebar setData={setData} data={data}/>
               </div>
               <div id="right-section" className="w-[75%]  p-[0.2rem]">
              
                 <JobApplicationCard data={data}/>
               </div>
           </div>

        </>
    )
}
export default Body;