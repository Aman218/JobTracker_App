import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './Specific.css';
function SpecificCard(props){

    return (
        <>
            <div id='card-detail' className="flex w-[99%] bg-[#f0e9a9ee]  px-[0.6rem] rounded-[7px] ">
                <p className="p-3 mt-3 ml-2 text-[1.2rem] w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-blue-500 font-bold text-white">{props.application.company[0].toUpperCase()}</p>
                <div className="py-2 w-[80%] ml-[0.5rem]">
                      <div className="flex justify-between">
                           <span className='text-[1.3rem] font-bold'>{props.application.company}</span>
                           <span>{props.application.applicationDate}</span>
                      </div>
                      <p className='font-[800] text-[#7f8180] text-[0.8rem] my-2'>{props.application.role}</p>
                      <div className="flex justify-between">
                         <span>{props.application.status}</span>
                         <div className=' p-[0.2rem] px-[0.9rem]'>
                           <EditIcon className='mr-[0.8rem] text-[#3ce62de5] cursor-pointer'/>
                           <DeleteIcon className='text-[#e71b1b] cursor-pointer'/>
                         </div>
                      </div>
                </div>
            </div>
        </>
    )
}
export default SpecificCard;