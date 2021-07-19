import React,{useEffect,useState} from 'react';
import CameraIcon from '@material-ui/icons/Camera';

const IndianCovid=()=>{
const [data,setData]=useState([]);
const getCovidData=async ()=>{
  const res=await  fetch('https://api.covid19india.org/data.json');
  const actualdata=await res.json();
  console.log(actualdata.statewise);
  setData(actualdata.statewise);
}

useEffect(()=>{
    getCovidData();
},[]);

    return (
        <>
    <h1 style={{textAlign:'center'}}><CameraIcon/>INDIAN COVID STATEWISE DATA</h1>
    <div className="table table-responsive">
    <table className="table table-dark">
        <thead>
            <tr>
                <th>state</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>


            </tr>
        </thead>
        <tbody>
            {
                data.map((currElem,index)=>{
                    return (    
                    <tr key={index}>
                        <td className="table-primary">{currElem.state}</td>
                        <td className="table-secondary">{currElem.confirmed}</td>
                        <td className="table-warning">{currElem.recovered}</td>
                        <td className="table-danger">{currElem.deaths}</td>
                        <td className="table-info">{currElem.active}</td>
                        <td className="table-success">{currElem.lastupdatedtime}</td>
                   </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
    </>

    )
    
}


export default IndianCovid;