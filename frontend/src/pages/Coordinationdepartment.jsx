import React from 'react'

const coordinationdepartment = () => {
  return (
    <>
    <div className='admin-container'>
      <h2>Coordination Department</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Sap Id</th>
            <th>Email</th>
            <th>Library Department</th>
            <th>SSD</th>
            <th>Fees & Dues Department</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>

            <tr>
              <td>Ahmed </td>
              <td>1233</td>
              <td>HtWg6@gmail.com</td>
              <td><select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select></td>
              <td>
              <select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select>
              </td>
              <td>
                <select name="" id="">
                 
                  <option value="">verified</option>
                  <option value="">unverified</option>
                </select>
              </td>
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
              <td>HtWg6@gmail.com</td>
           
             <td>   <select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select></td>
  
              <td>
                <select name="" id="">
                 
                  <option value="">verified</option>
                  <option value="">unverified</option>
                </select>
              </td>
              <td>
              <select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select>
              </td>
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
              <td>Ghazanfar123@gmail.com</td>
              <td><select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select></td>
           
              <td>
                <select name="" id="">
                 
                  <option value="">verified</option>
                  <option value="">unverified</option>
                </select>
              </td>
              <td>
              <select name="" id="">
                 
                 <option value="">verified</option>
                 <option value="">unverified</option>
               </select>
              </td>
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

export default coordinationdepartment
