import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import { jobApplications } from '../utils/jobApplications';
function Sidebar(props){
    function handleChange(e){
        let text=e.target.value;
        let filteredData=jobApplications.filter((application)=>{
                if(application.company.toLowerCase().includes(text.toLowerCase())||application.role.toLowerCase().includes(text.toLowerCase())){
                    return true;
                }
        })
        props.setData(filteredData)
    }
    function handleStatusChange(e){
         let status=e.target.value;
         if(status==''){
            props.setData(jobApplications);
         }
         else{
            let dataFilter=jobApplications.filter((application)=>{
                if(application.status.toLowerCase()==status.toLowerCase()){
                    return true;
                }
            })
            props.setData(dataFilter)
         }
    }
    return (
        <>
               <div id='search-div' className='flex items-center bg-white w-[85%] px-[0.6rem] py-[0.3rem] overflow-hidden m-[0.2rem]'>
                  <SearchIcon/>
                  <input id='input-box' type="text" placeholder='Search...' className='focus:outline-none' onChange={handleChange}/>
               </div>
               <div id="filter-cont" className='bg-white w-[85%] m-[0.2rem] px-[0.6rem] py-[0.3rem] mt-[0.8rem]'>
                    <h1 className='font-bold'>Filters</h1>
                    <div className='w-[100%]'>
                        <p className='my-[0.6rem]'>Status</p>
                        <select name="" id="" className='w-[90%] py-[0.4rem] px-[0.2rem] border-2 border-blue-100' onChange={handleStatusChange}>
                            <option value="">All Status</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Replied">Replied</option>
                            <option value="Applied">Applied</option>
                        </select>
                    </div>
               </div> 
          
        </>
    )
}
export default Sidebar;