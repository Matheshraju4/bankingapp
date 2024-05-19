import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Control, FieldPath, Form } from "react-hook-form";
import { AuthFormSchema } from "@/lib/utils";
import { z } from "zod";
interface CustomInput {
  control: Control<z.infer<typeof AuthFormSchema>>;
  name: FieldPath<z.infer<typeof AuthFormSchema>>;
  label: string;
  placeholder: string;
}
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="input-class"
                type={name === "password" ? "password" : "text"}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
