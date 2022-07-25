import { data } from 'autoprefixer';
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'



function Register() {
  const { register, handleSubmit, formState: { errors }, watch ,control } = useForm()


  const onSubmit = data => console.log(data)
  
  console.log("data", data)
  const options = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' }
  ]
  const hoptions = [
    { value: '1', label: 'Music' },
    { value: '2', label: 'Reading' },
    { value: '3', label: 'tv' },
    { value: '4', label: 'Sports' },
    { value: '5', label: 'Shopping' },
    { value: '6', label: 'Travel' },
    { value: '7', label: 'Crafts' },

  ]

  return (
   <div className='mx-auto w-50 my-5 border border-success px-5 py-4 shadow-lg'>
    <h1 className='text-center pb-3'>Register Now</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        <label htmlFor="">Email</label><br />
        <input type="email" className='w-100 py-2'
          placeholder="enter your email" {...register('email', {
          required: true,
          pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })} /><br />
        {
          (errors.email && errors.email.type) === 'required'
          && <p className='fw-normal text-danger fs-6'>email reuired</p>
        }
        {
          (errors.email && errors.email.type) === 'pattern'
          && <p className='fw-normal text-danger fs-6'>email invalid</p>
        }
      </div>
      <div className='w-100 my-3 '>
      <label htmlFor="">Gender</label>
      <Controller
        name="gselect"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={options}
          placeholder='select gender'
        />}
      />
      </div>
      <div className='w-100 my-3'>
      <label htmlFor="">Hoppies</label>
        <Controller
        name="hselect"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Select 
          {...field} 
          options={hoptions}
          isMulti
          isSearchable
          placeholder='select hoppy'
        />}
      />
      </div>

      <div>
      <label htmlFor="">Password</label><br />
        <input className='w-100 py-2' type="password" placeholder="enter your Password" {...register('password', { required: true, minLength: 8, maxLength: 12 })} /><br />
        {
          (errors.password && errors.password.type) === 'required'
          && <p className='fw-normal text-danger fs-6'>password reuired</p>
        }
        {
          (errors.password && errors.password.type) === 'minLength'
          && <p className='fw-normal text-danger fs-6'>min length 8</p>
        }
        {
          (errors.password && errors.password.type) === 'maxLength'
          && <p className='fw-normal text-danger fs-6'>max length 12</p>
        }

      </div>
      <div className='my-4'>
      <label htmlFor="">confirm password</label><br />
        <input className='w-100 py-2' type="password"
         placeholder="enter your Password again" 
         {...register('c_password', { required: true,
           validate: (value) => {
          if (watch('password') !== value) {
            console.log(value)
            return "password don't match";
          }} 
        })} /><br />
        {
          (errors.c_password && errors.c_password.type) === 'required'
          && <p className='fw-normal text-danger fs-6'>confirm password reuired</p>
        }
         {
          (errors.c_password && errors.c_password.type) === 'validate'
          && <p className='fw-normal text-danger fs-6'>{errors.c_password.message}</p>
        }
       
      </div>
      <button type='submit' className='btn btn-success d-block mx-auto'>Submit</button>
    </form>
   </div>
  );
}
export default Register;
