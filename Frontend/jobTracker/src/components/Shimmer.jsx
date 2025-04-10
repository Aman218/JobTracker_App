import './Shimmer.css';
function Shimmer(){
    let arr=new Array(20).fill(0);
    console.log(arr)

    return (
        <>
         <div id='grid'>
           {arr.map((data,index)=>{
             return (
                <div key={index} id='shimmer-cont' className="animation w-[310px] h-[150px] rounded-lg bg-[#d4d0d0] border border-white">
                     
                 </div>
             )
           })}
           </div>
        </>
    )
}
export default Shimmer;