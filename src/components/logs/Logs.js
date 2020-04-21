import React,{useState,useEffect} from 'react';

import LogItem from './LogItem';
import PreLoader from '../layout/Preloader';

const Logs = () => {
  const [logs,setLogs] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    console.log('will run only once');
    getLogs();
  },[]);//here we have passed an empty array which means we only need to run once first time
  
  // this is function for API call which will get all logs
  const getLogs = async () =>{
    setLoading(true);

    // fetch api and we have used proxy
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  }

  if(loading){
    return <PreLoader/>
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading&&logs.length===0?(<p className='center'>No Logs to show...</p>):(
        logs.map(l=>(
         
            <LogItem log={l} key={l.id}/>
         
        ))
      )}
    </ul>
  );
}

export default Logs;
