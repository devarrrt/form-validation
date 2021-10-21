import React from 'react'
import { useForm } from "react-hook-form";

import './App.css'

const App = () => {
  const { register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container">
      <div className="form-content">
        <h1>Validation Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}
          className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: "Name is required field" })}
            />
            <small className="text-danger">Required</small>
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              className="form-control"
              {...register("age", { required: "Age is required field" })}
            />
            <small className="text-danger">Required</small>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: "Email is required field" })}
            />
            <small className="text-danger">Required</small>
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              className="form-control"
              {...register("phone", { required: "Phone is required field" })}
            />
            <small className="text-danger">Required</small>
          </div>

          <div className="form-group">

          </div>
          <label className="col-form-label">Message:</label>
          <textarea
            className="form-control"
            {...register("message", { required: "Message is Required" })}
          />
          <input
            type="submit"
            className="btn-submit"
            value="Send message"
          />
        </form>
      </div>
    </div>
  )
}

export default App
