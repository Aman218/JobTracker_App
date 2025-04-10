import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState,useEffect } from "react";
function App(){

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log('Function called')
    const response = await fetch('https://jobtracker-app.onrender.com/getAllJobApplications');
    const finalData = await response.json();
    setData(finalData);
  }
  return (
    <>
      <Navbar refreshJobs={fetchData} data={data}/>
      <Body/>
    </>
  )
}
export default App;