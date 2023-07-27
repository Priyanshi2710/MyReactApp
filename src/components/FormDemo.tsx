import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
  FormControl,
  Button,
} from "@mui/material";

interface FormProps {
  RadioButton: string | null;
  Checkbox: string | null;
  TextField: string | undefined;
  Amount: number | null;
  Select: string | null;
  Autocomplete: { label: string; value: string } | null;
  selectedDate: Date ;
  // dateRange: {
  //   start: Date;
  //   end: Date;
  // };
  // DateRange: DateRange<Dayjs>;

  DateRange?: [any?, any?] | undefined

  //dateRange: [dayjs().subtract(1, "week").toDate(), dayjs().toDate()],
  //defaultValue?: DateRange<dayjs.Dayjs>
}

//------Select code running
// const options = [
//   {
//     label: "op1",
//     value: "India",
//   },
//   {
//     label: "op2",
//     value: "USA",
//   },
// ];
const maritalStatusOptions = [
  { label: "Single", value: "single" },
  { label: "Married", value: "married" },
  { label: "Divorced", value: "divorced" },
];

// const options = ["Option 1", "Option 2"];
export const FormDemo = () => {
  const [formData, setFormData] = useState<any>({});
  const date = new Date();
  const form = useForm<FormProps>({
    defaultValues: {
      RadioButton: null,
      Checkbox: "",
      TextField: "",
      Amount: null,
      Select: "",
      Autocomplete: null,
      selectedDate:date,
      DateRange: [dayjs().subtract(1, "week").toDate(), dayjs().toDate()],
      
      
    },
  });

  //-------Select code running
  // const generateSingleOptions = () => {
  //   return options.map((option: any) => {
  //     return (
  //       <MenuItem key={option.value} value={option.value}>
  //         {option.label}
  //       </MenuItem>
  //     );
  //   });
  // };
  const top100Films = [
    { label: "The Shawshank Redemption", value: "1994" },
    { label: "The Godfather", value: "1972" },
    { label: "The Godfather: Part II", value: "1974" },
    { label: "The Dark Knight", value: "2008" },
    { label: "12 Angry Men", value: "1957" },
    { label: "Schindler's List", value: "1993" },
    { label: "Pulp Fiction", value: "1994" },
  ];
  const { control, handleSubmit, setValue, formState } = form;
  
  const onSubmit = (data: FormProps) => {
    
    // const selectedDateString = '2023-07-28';
    // const selectedDate = new Date(selectedDateString);
    // const formattedDate = selectedDate.toLocaleDateString('en-GB');
    // console.log(formattedDate);
    // if(data.selectedDate){
    //   const fd =`${data.selectedDate.getDate()}${data.selectedDate.getMonth() + 1}${data.selectedDate.getFullYear()}`; 
    //   setStoredDate(fd);
    //   console.log(storedDate);
    // }
    console.log("form submitted..", data);
    // console.log(storedDate);
    var date = new Date(data.selectedDate);
    var d = new Date(date.toLocaleDateString());
    data.selectedDate = new Date((d.getUTCDate())+ "/" + (d.getUTCMonth() + 1) +  "/" + (d.getUTCFullYear()));
    
    
    
      setFormData(data);
      
  };
 
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

<Controller
        name="Amount"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Amount is required.",
          },

          max: {
            value: 10,
            message: "Invalid.",
          },
          min: {
            value: 1,
            message: "Invalid.",
          },
        }}
        render={({ field: { ref, value, ...field } }) => (
          <TextField
            type="number"
            id="Amount"
            label="Amount"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
            inputRef={ref}
            onChange={(e) => {
              const value =
                e.target.value !== "" ? parseInt(e.target.value) : null;
              setValue("Amount", value, { shouldValidate: true });
            }}
            value={value}
          />
        )}
      />

      <Controller
        name="TextField"
        control={control}
        rules={{
          required: {
            value: true,
            message: "TextField is required.",
          },
        }}
        render={({ field: { ref, value, ...field } }) => (
          <TextField
            id="TextField"
            label="Name "
            type="text"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
            inputRef={ref}
            value={value}
          />
        )}
      />
      <Controller
        name="RadioButton"
        control={control}
        rules={{
          required: {
            value: true,
            message: "RadioButton is required.",
          },
        }}
        render={({ field: { ref, value, ...field } }) => (
          <FormControl>
            <RadioGroup
              {...field}
              value={value}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
                inputRef={ref}
              />
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
                inputRef={ref}
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      {/* <Controller
        name="Checkbox"
        control={control}
        rules={{
          required: {
            value: true,
            message: "check box is required.",
          },
        }}
        render={({ field: { onChange, value, onBlur, ref, ...field } }) => (
          <FormGroup >
            {maritalStatusOptions.map((option) => (
              <FormControl
              key={option.value}
              >
                
                <Checkbox
                
                  {...field}
                  checked={field.name === option.value}
                  value={option.value}
                  onBlur={() => {
                    console.log(option.value, "field.name", field.name);
                  }}
                  onChange={onChange}
                />
              </FormControl>
            ))}
          </FormGroup>
        )}
      /> */}

      <Controller
        name="Checkbox"
        control={control}
        rules={{
          required: {
            value: true,
            message: "check box is required.",
          },
        }}
        render={({ field: { onBlur, ...field } }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  id="Checkbox"
                  // checked={value}
                  // onChange={onChange}
                  value="true"
                />
              }
              label="Married"
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  {...field}
                  id="Checkbox"
                  // checked={value}
                  //onChange={onChange}
                  value="false"
                />
              }
              label="Not Married"
            />
          </FormGroup>
        )}
      />

      <Controller
        name="Select"
        control={control}
        rules={{
          required: {
            value: true,
            message: "please select any.",
          },
        }}
        render={({ field: { onChange, value, onBlur, ...field } }) => (
          <FormControl fullWidth>
            <InputLabel id="Select">Country</InputLabel>
            <Select
              {...field}
              id="Select"
              onChange={onChange}
              value={value}
              onBlur={() => {
                console.log(value);
              }}
            >
              {/* {generateSingleOptions()} */}
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="London">London</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="Autocomplete"
        control={control}
        rules={{
          required: {
            value: true,
            message: "please select any.",
          },
        }}
        render={({ field: { onChange, onBlur, ...field } }) => (
          <Autocomplete
            {...field}
            id="AutoComplete"
            options={top100Films}
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => {
              setValue("Autocomplete", value);
            }}
            // isOptionEqualToValue={(option,value)=>option.value==}

            renderInput={(params) => (
              <TextField {...params} label="Controllable" />
            )}
            onBlur={() => {
              console.log();
            }}
            //value={value}
          />
        )}
      />
       <Controller
        name="DateRange"
        control={control}
        rules={{
          required: {
            value: true,
            message: "please select any.",
          },
        }}
        render={({ field: { value, onChange, onBlur, ...field } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              format="DD/MM/YYYY"
              localeText={{ start: "Check-in", end: "Check-out" }}
            />
          </LocalizationProvider>
        )}
      />

{/*  -- old datepicker running
<Controller
        name="selectedDate"
        control={control}
        rules={{
          required: {
            value: true,
            message: "please select any.",
          },
        }}
        render={({ field: { value,onChange,ref,onBlur, ...field } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            {...field}
              format="DD/MM/YYYY"
              //onChange={(newValue) => setValue("selectedDate", newValue)}
              label="Basic date picker"
              value={value}
            />
          </LocalizationProvider>
        )}
      /> */}

      <h2>date changes UTC</h2>

      <Controller
        name="selectedDate"
        control={control}
        rules={{
          required: {
            value: true,
            message: "please select any.",
          },
        }}
        render={({ field: { value,onChange , ...field }  }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            {...field}
              format="DD/MM/YYYY"
              label="Basic date picker"
              
              
            //  onChange={(newValue: number | null | undefined) => setValue("selectedDate",newValue)}
             
             onChange={(newValue:any) => setValue("selectedDate",newValue)}
            //  value={newValue}
          
              //onChange={(newValue) => setValue("selectedDate",newValue)}
      
            />
          </LocalizationProvider>
        )}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};


