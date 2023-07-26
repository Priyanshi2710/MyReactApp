import React from "react";
import { useForm } from "react-hook-form";

import {
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";

type FormValues = {
  username: string;
  email: string;
  password: string;
  gender: GenderEnum;
  maritalStatus: false;
  age: number;
  city:string[];
};
enum GenderEnum {
  female = 1,
  male = 2,
}
const City =[
    {    label:'Ahmedabad'},
    {label:'Gandhinagar'},
]




const handleChange = () => {
  console.log("The checkbox was toggled");
};

export const FromFile = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted..", data);
  };

  return (
    <div>
      <h1>React Form </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className = "form">
  
          <label htmlFor="username">User name</label>

          <TextField
            id="username"
            type="text"
            variant="outlined"
            {...register("username", { required: "username is required" })}
          />
          <p className="errors">{errors.username?.message}</p>
     

          <label htmlFor="Gender">Gender</label>
          <RadioGroup
            {...register("gender")}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
          >
            <FormControlLabel value="1" control={<Radio />} label="Female" />
            <FormControlLabel value="2" control={<Radio />} label="Male" />
          </RadioGroup>
   




          <label htmlFor="Marital Status">Marital Status</label>
          <FormGroup {...register("maritalStatus")}>
            <FormControlLabel 
            control={<Checkbox  />} label="Yes" />
            <FormControlLabel required control={<Checkbox />} label="No" />
          </FormGroup>
     
        
          <InputLabel id="age">Age</InputLabel>
          <Select
            label="Age"
            // name={name} ref={ref} onChange={onChange}
          >
            <MenuItem disabled>select any</MenuItem>
            <MenuItem> less than 18 </MenuItem>
            <MenuItem> 18 </MenuItem>
            <MenuItem> more than 18 </MenuItem>
          </Select>
        
        
          <Autocomplete
            disablePortal
            id="city"
            options={City}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
            {...register("city" )}
          />
        

        {/* 
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register(
              "email",

              {
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email ",
                },
              }
            )}
          />
          <p className="errors">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "password is required" })}
          />
          <p className="errors">{errors.password?.message}</p>
        </div> */}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
