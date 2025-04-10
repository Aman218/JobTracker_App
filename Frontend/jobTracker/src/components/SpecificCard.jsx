import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './Specific.css';
import { useState } from 'react';
function SpecificCard(props){
    const[flag,setFlag]=useState(true);
    const [text,setText]=useState('');
    const [editedStatus, setEditedStatus] = useState(props.application.status);
  function handleEdit(e){
    console.log('EditButton is Clicked');
    setFlag(!flag);
  }
  function handleDelete(e){
    console.log('Delete button is clicked')
    console.log(e.target)
    e.currentTarget.closest('#card-detail').remove();
    
  }
  function handleSave(){
    setFlag(!flag);
  }
  function handleTextChange(e){
      setEditedStatus(`${e.target.value[0].toUpperCase()}${e.target.value.slice(1)}`);
     

  }
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
                        {flag? <span id='spanId'>{editedStatus}</span>:
                         <input type="text" placeholder='Enter Status here' onChange={handleTextChange} id='input-text' />
                        }
                         <div className=' p-[0.2rem] px-[0.9rem]'>
                          {flag? <EditIcon className='mr-[0.8rem] text-[#3ce62de5] cursor-pointer' onClick={handleEdit}/>:
                          <SaveIcon className='mr-[0.8rem] text-[#3ce62de5] cursor-pointer'onClick={handleSave} />
                          }
                           <DeleteIcon className='text-[#e71b1b] cursor-pointer' onClick={handleDelete}/>
                         </div>
                      </div>
                </div>
            </div>
        </>
    )
}
export default SpecificCard;