import React from 'react'

export const UserList = ({collection, editUser, deleteUser, backtoForm}) => {
    return (
    <>
    <div className='user-list'>
    <h2>User List</h2>
    {
    collection.length !== 0 ?
        <table className='user-table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th> 
            </tr>
            </thead>
            <tbody>
            {
                collection && (collection.map((item,i) => {
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.fn}</td>
                            <td>{item.ln}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.address}</td>
                         </tr>
                    )
                }))
            }
            </tbody>
        </table> : <div className='mt-4'>No List Found.</div>
    }
    <div className='add-user-btn' onClick={()=> backtoForm()}>Add User</div>
    </div>
    </>
  )
}
