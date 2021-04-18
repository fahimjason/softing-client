import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AddUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.addedBy = loggedInUser.name;

        fetch('https://aqueous-beach-52481.herokuapp.com/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('User added successfully')
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-4">
                    <h3 className="py-2">Add new user</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="New user name" rows="3" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="New user email" rows="3" {...register("email", { required: true })} />
                            {errors.review && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-lg btn-primary">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;