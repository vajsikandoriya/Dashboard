import React from 'react'

const UserAddform = ({handleSubmit, formData, handleChange}) => {
  return (
    <><h2 className='pb-3'>Add User</h2>
    <form onSubmit={handleSubmit} className='user-form'>
        
        <div className="user-form-row">
            <label htmlFor="firstname">First Name</label>
            <input value={formData.fn} type="text" className="form-control" id="fn" onChange={handleChange} required />
        </div>
        <div className="user-form-row">
            <label htmlFor="lastname">Last Name</label>
            <input value={formData.ln} type="text" className="form-control" id="ln" onChange={handleChange} required />
        </div>
        <div className="user-form-row">
            <label htmlFor="lastname">Email</label>
            <input value={formData.email} type="text" className="form-control" id="email" onChange={handleChange} required />
        </div>
        <div className="user-form-row">
            <label htmlFor="lastname">Contact Number</label>
            <input value={formData.number} type="number" className="form-control" id="number" onChange={handleChange} required />
        </div>
        <div className="user-form-row">
            <label htmlFor="lastname">Address</label>
            <textarea value={formData.address} type="text" className="form-control" id="address" onChange={handleChange} required></textarea>
        </div>
        <div className="user-form-row button-row">
            <button type="submit" className="submit-user">Submit</button>
        </div>
    </form>
    </>
  )
}

export default UserAddform