import jobApplication from "../Model/job-application.model.js"
export function createJobApplications(req,res){
    const {
        company,
        role,
        status = "Applied", 
        applicationDate = new Date().toISOString().split('T')[0], // Default to today
        link = "",
        notes = ""
    } = req.body;

    let newJobApplication=new jobApplication({
        company,
        role,
        status,
        applicationDate,
        link,
        notes
    })
    newJobApplication.save().then((data)=>{
        if(!data){
            return res.status(404).json({message:'No data found'});
        }
        res.send(data)
    }).catch((err)=>{
        return res.status(500).json({message:err.message})
    })
}


export function fetchAllJobApplication(req,res){
     jobApplication.find().then((data)=>{
        if(!data){
            return res.status(404).json({message:'No data found'});
        }
        res.send(data);
     }).catch((err)=>{
        return res.status(500).json({message:err.message});
     })
}
export function updateJobStatus(req, res) {

    if (!req.params || !req.params.id) {
        return res.status(400).json({ message: 'Missing job application ID' });
    }
    console.log(req.params)
    const { id } = req.params; // Get ID from URL params
    const { status } = req.body; // Get new status from body

    jobApplication.findByIdAndUpdate(
        id,
        { status }, // Only update the status field
        { new: true } // Return the updated document
    ).then((updatedApplication) => {
        if (!updatedApplication) {
            return res.status(404).json({ message: 'Job application not found' });
        }
        res.send(updatedApplication);
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    });
}
export function deleteJobApplication(req, res) {
    const { id } = req.params; // Get ID from URL params

    jobApplication.findByIdAndDelete(id)
        .then((deletedApplication) => {
            if (!deletedApplication) {
                return res.status(404).json({ message: 'Job application not found' });
            }
            res.send({ 
                message: 'Job application deleted successfully',
                deletedApplication 
            });
        })
        .catch((err) => {
            return res.status(500).json({ message: err.message });
        });
}