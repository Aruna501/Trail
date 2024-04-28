import React from 'react'
import { useForm } from 'react-hook-form';

let renderCount = 0;

export default function App() {

  renderCount++;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm(
    {
      defaultValues:{
        email: "aruna",
        password: "12457855"
      }
    }
  );

  console.log(watch("password"));

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="App">
      <h1> {renderCount} times Rendered</h1>
      <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" placeholder='Enter the Email address' name="email" {...register("email", {required: 'Email is required'})} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" placeholder='Enter the Email password' name="password" {...register("password", {required: 'Password is mandatory', minLength: {
            value: 7,
            message: 'strong the password, at least fill the 7 character'
          }})} />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-control">
          {/* <label></label> */}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

// export default App