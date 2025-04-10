import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';
import { useState, useEffect } from 'react';

function Sidebar(props) {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let response = await fetch('http://localhost:3000/getAllJobApplications');
        let finalData = await response.json();
        setAllData(finalData);
        props.setData(finalData);
    }

    function handleChange(e) {
        let text = e.target.value;
        let filteredData = allData.filter((application) => {
            return (
                application?.company?.toLowerCase().includes(text.toLowerCase()) ||
                application?.role?.toLowerCase().includes(text.toLowerCase())
            );
        });
        props.setData(filteredData);
    }

    function handleStatusChange(e) {
        let status = e.target.value;
        if (status === '') {
            props.setData(allData);
        } else {
            let filteredData = allData.filter((application) => {
                return application?.status?.toLowerCase() === status.toLowerCase();
            });
            props.setData(filteredData);
        }
    }

    return (
        <>
            <div id='search-div' className='flex items-center bg-white w-[85%] px-[0.6rem] py-[0.3rem] overflow-hidden m-[0.2rem]'>
                <SearchIcon />
                <input
                    id='input-box'
                    type="text"
                    placeholder='Search...'
                    className='focus:outline-none'
                    onChange={handleChange}
                />
            </div>
            <div id="filter-cont" className='bg-white w-[85%] m-[0.2rem] px-[0.6rem] py-[0.3rem] mt-[0.8rem]'>
                <h1 className='font-bold'>Filters</h1>
                <div className='w-[100%]'>
                    <p className='my-[0.6rem]'>Status</p>
                    <select
                        name=""
                        id=""
                        className='w-[90%] py-[0.4rem] px-[0.2rem] border-2 border-blue-100'
                        onChange={handleStatusChange}
                    >
                        <option value="">All Status</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Replied">Replied</option>
                        <option value="Applied">Applied</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
