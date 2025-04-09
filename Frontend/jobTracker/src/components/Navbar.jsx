import AddIcon from '@mui/icons-material/Add';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function Navbar() {
  const [flag,setFlag]=useState(true);
  function handleFlag(){
      setFlag(!flag);
  }

  return (
    <>
      <div className="flex outer-container-nav justify-between items-center bg-[#fff] py-[0.7rem] pb-[0.9rem] px-[0.9rem]">
        <h1 id='jobTracker' className="text-[1.8rem] font-[600] text-[#2563eb]">JobTracker</h1>
        <p id='total' className="text-[1.5rem]">Total</p>
        <div className='flex items-center button-container bg-red-100 px-[0.7rem] py-[0.4rem] rounded-[7px]'>
          <button id='btn' className="text-[1.1rem] font-[500] text-[#2563eb] cursor-pointer"> <AddIcon /> Add New Application</button>
        </div>
       {flag? <div id="menu-btn" className='' onClick={handleFlag}>
          <MenuIcon fontSize="large"/>
        </div>:
         <div id='clear-btn' className='relative' onClick={handleFlag}>
           <ClearIcon fontSize='large'/>
           <div id='reference-clear-btn' className='absolute right-2 flex flex-col  items-center w-[270px] h-[20vh]  bg-[#f0d29b] justify-center rounded-[4px] mt-[0.4rem]'>
              <div className='flex items-center px-2 py-1.5 bg-gray-200 rounded-[6px]  '>
              <AddIcon className="text-[#2563eb]"/>
                <button className='text-[#2563eb] font-bold '>
                 Add Information
                </button>
              </div>
              <p className='font-bold mt-0.5'>
                Total
              </p>
           </div>
          </div>
        }
      </div>
    </>
  )
}
export default Navbar