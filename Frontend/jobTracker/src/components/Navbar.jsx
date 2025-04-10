import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import './Navbar.css';

function Navbar(props) {
  const [flag, setFlag] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: ''
  });

  const handleFlag = () => {
    setFlag(!flag);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jobtracker-app.onrender.com/post/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Job added successfully!");
     

        setFormData({
          company: '',
          role: '',
          status: 'Applied',
          date: '',
          link: ''
        });
        setShowModal(false);
        window.location.reload();
       
      } else {
        alert("Failed to add job. Try again.");
      }
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Error occurred while adding job.");
    }
  };

  return (
    <>
      <div className="flex outer-container-nav justify-between items-center bg-[#fff] py-[0.7rem] pb-[0.9rem] px-[0.9rem] w-[100%] relative">
        <h1 id='jobTracker' className="text-[1.8rem] font-[600] text-[#2563eb]">JobTracker</h1>
        <p id='total' className="text-[1.5rem] font-bold">Total: {props.data.length}</p>
        <div className='flex items-center button-container bg-[#f0e9a9ee] px-[0.7rem] py-[0.4rem] rounded-[7px]' onClick={() => setShowModal(true)}>
          <button 
            id='btn' 
            className="text-[1.1rem] font-[500] text-[#2563eb] cursor-pointer"
          > 
            <AddIcon /> Add New Application
          </button>
        </div>
        {flag ? (
          <div id="menu-btn" onClick={handleFlag}>
            <MenuIcon fontSize="large"/>
          </div>
        ) : (
          <div id='clear-btn' className='relative' onClick={handleFlag}>
            <ClearIcon fontSize='large'/>
            <div id='reference-clear-btn' className='absolute right-2 flex flex-col items-center w-[270px] h-[20vh] bg-[#f0e9a9ee] justify-center rounded-[4px] mt-[0.4rem]'>
              <div 
                className='flex items-center px-2 py-1.5 bg-gray-200 rounded-[6px] cursor-pointer'
                onClick={() => setShowModal(true)}
              >
                <AddIcon className="text-[#2563eb]"/>
                <button className='text-[#2563eb] font-bold'>
                  Add Information
                </button>
              </div>
              <p className='font-bold mt-0.5'>
                 Total: {props.data.length}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              <ClearIcon />
            </button>
            <h2 className="modal-title">Add New Application</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date Applied</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Link (Optional)</label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-actions">
                <button 
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="submit-btn"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;
