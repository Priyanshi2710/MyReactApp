import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

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
  Checkbox: boolean | undefined;
  TextField: string | null;
  Amount: number | null;
}
interface Refs {
  [key: string]: any;
}
export const FormDemo = () => {
  const [formData, setFormData] = useState<any>({});
  const form = useForm<FormProps>({
    defaultValues: {
      RadioButton: null,
      Checkbox: undefined || false,
      TextField: null || "",
      Amount: null,
    },
  });
  const { control, handleSubmit, formState } = form;
  const onSubmit = (data: FormProps) => {
    console.log("form submitted..", data);
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
            message: 'Invalid.',
          },
          min: {
            value: 1,
            message: 'Invalid.',
          },
        }}
        render={({ field: { ref, value, ...field } }) => (
          <TextField
            id="Amount"
            label="Name "
            type="number"
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
          
        )
      }
        
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
      <Controller
        name="Checkbox"
        control={control}
        rules={{
          required: {
            value: true,
            message: "check box is required.",
          },
        }}
        render={({ field: { onChange, value, onBlur, ref, ...field } }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                  value="married"
                />
              }
              label="Married"
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  {...field}
                  checked={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                  value="unmarried"
                />
              }
              label="Not Married"
            />
          </FormGroup>
        )}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
