"use client";
import {
  FieldValues,
  FormProvider as BCFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const FormProvider = ({ children, onSubmit }: TFormProps) => {
    const methods = useForm();

    const submit: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
      console.log(data);
    };
    return (
        <BCFProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
      </BCFProvider>
    );
};

export default FormProvider;