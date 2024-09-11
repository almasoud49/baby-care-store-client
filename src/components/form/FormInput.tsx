"use client";

import { TInputProps } from "@/types/type.global";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";



const FormInput = ({
    name,
    label,
    type,
    size = "medium",
    fullWidth,
    required,
  } : TInputProps) => {
    const { control } = useFormContext();

    return (
        <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            variant="filled"
            size={size}
            fullWidth={fullWidth}
            placeholder={label}
            required={required}
          />
        )}
      />
    );
};

export default FormInput;