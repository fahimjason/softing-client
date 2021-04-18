import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.user = loggedInUser.name;
        data.email = loggedInUser.email;
        data.img = loggedInUser.img;

        fetch('https://aqueous-beach-52481.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('Review added successfully')
            })
    }




    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label"><h3>Review</h3></label>
                            <textarea type="text" className="form-control" name="review" placeholder="Review Description..." rows="3" {...register("review", { required: true })} ></textarea> <br />
                            {errors.review && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-lg btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;