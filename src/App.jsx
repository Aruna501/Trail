import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is mandatory'),
  lastName: yup.string().required('Last name is mandatory'),
  email: yup.string().email('Please enter valid email').required('Enter the mail'),
  age: yup.number().integer().positive('Provide the proper age').required('Enter the age'),
  password: yup.string().required().min(4, 'Minimum 4 chars required').max(15, 'Enter upto 15 chars only'),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})
// .required();

export default function App() {

  const {register, handleSubmit, formState: {errors, isValid, isDirty }} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log(isValid)
    return (
    <div>
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
        <input {...register('firstName')} placeholder='First Name....'/>
        <p>{errors.firstName?.message}</p>
        <input {...register('lastName')} placeholder='Last Name....'/>
        <p>{errors.lastName?.message}</p>
        <input {...register('email')}  placeholder='Email....'/>
        <p>{errors.email?.message}</p>
        <input {...register('age')} placeholder='Age....'/>
        <p>{errors.age?.message}</p>
        <input {...register('password')} type='password' placeholder='Password....'/>
        <p>{errors.password?.message}</p>
        <input {...register('confirmPassword')} type='password' placeholder='Confirm Password....'/>
        <p>{errors.confirmPassword?.message}</p>
        <input type='submit' id='submit' disabled={isDirty && !isValid}/>
        </form>
    </div>
  );
}

// export default App