import { createContext, useEffect, useState } from "react";

type FormStepContextData = {
  currentStep: number;
  totalSteps: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  moveToStep(step: number): void;
};

export const FormStepContext = createContext({
  currentStep: 2,
  totalSteps: 0,
  // steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
  moveToStep: () => {},
} as FormStepContextData);

interface FormStepProviderProps {
  children: React.ReactNode;
}

export const FormStepProvider = ({ children }: FormStepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNextStep = () => {
    const newStepValue = currentStep + 1;
    setCurrentStep(newStepValue);
  };

  const handlePreviousStep = () => {
    const newStepValue = currentStep - 1;
    if (currentStep > 1) {
      setCurrentStep(newStepValue);
    }
  };

  const moveToStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <FormStepContext.Provider
      value={{
        totalSteps,
        currentStep,
        handleNextStep,
        handlePreviousStep,
        moveToStep,
      }}
    >
      {children}
    </FormStepContext.Provider>
  );
};
