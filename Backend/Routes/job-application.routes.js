import { createJobApplications, deleteJobApplication, updateJobStatus } from "../Controller/job-application.controller.js";
import { fetchAllJobApplication } from "../Controller/job-application.controller.js";

export function routes(app){
    app.post('/post/jobs',(req,res)=>{
        createJobApplications(req,res)
    })
    app.get('/getAllJobApplications',(req,res)=>{
        fetchAllJobApplication(req,res)
    })
    app.put('/updateStatus/:id',(req,res)=>{
        updateJobStatus(req,res);
    })
    app.delete('/deleteApplication/:id',(req,res)=>{
        deleteJobApplication(req,res);
    })
}