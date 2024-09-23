import React from 'react'

const feesdepartment = () => {
  return (
    
        <>

      <div className='admin-container'>
        <h2>Manage Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
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
