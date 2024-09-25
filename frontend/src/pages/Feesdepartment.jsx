import React,{useEffect,useState} from 'react'
// import {  deleteUser, get } from '../services/ApiEndpoint'
// import  { toast } from 'react-hot-toast'
const feesdepartment = () => {
  const [users,setUsers]=useState([])
  return (
    
        <>

      <div className='admin-container'>
        <h2>Fees Department</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sap Id</th>
              <th>Email</th>
              <th>Total Fees</th>
              <th>Remaining Dues</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>

              <tr>
                <td>Ahmed </td>
                <td>1233</td>
                <td>HtWg6@example.com</td>
                <td>120000</td>
                <td>0</td>
                <td>
                  <select name="" id="">
                   
                    <option value="">verified</option>
                    <option value="">unverified</option>
                  </select>
                </td>
              </tr>
              
              <tr>
                <td>Ali </td>
                <td>2221</td>
                <td>HtWg6@example.com</td>
                <td>120000</td>
                <td>0</td>
                <td>
                  <select name="" id="">
                   
                    <option value="">verified</option>
                    <option value="">unverified</option>
                  </select>
                </td>
              </tr>
              
              <tr>
                <td>Ghanzanfar</td>
                <td>5454</td>
                <td>Ghazanfar123@example.com</td>
                <td>110000</td>
                <td>1000</td>
                <td>
                  <select name="" id="">
                   
                    <option value="">verified</option>
                    <option value="">unverified</option>
                  </select>
                </td>
              </tr>
            {/* {users && users.map((elem,index)=>{
              return(
                <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <button    onClick={()=>handleDelet(elem._id)}>Delete</button>
                </td>
              </tr>
              )
            })} */}
              
            </tbody>
        </table>
      </div>
    </>
    
  )
}

export default feesdepartment
