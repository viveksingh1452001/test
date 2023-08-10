import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const [userData, setUserData] = useState([])

  const navigate = useNavigate();

  const callAbout= async()=>{
    try {
      const res = await fetch('/about',{
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();
      setUserData([data]);
      console.log(data);
      if(!res.status===200){
        throw new Error(res.error);
      }
      
    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }

  useEffect(()=>{
    callAbout();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div>
      {userData.map((data, index)=>{
        return(
          <table>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
           
          </table>
        )
      })}
      </div>
  )
}
                                    
export default About