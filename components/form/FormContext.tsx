import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ReactNodeProps } from "@/app/interfaces";
import "./form.css";

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
});

export function FormProvider({ children }: ReactNodeProps) {
  const [formData, setFormData] = useState();
  const [step, setStep] = useState(1);

  function onHandleNext() {
    console.log("clicked next");
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    console.log("clicked back");
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
