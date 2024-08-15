"use client";

import { FormStep } from "@/components/Form/FormStep";
import { FormProvider } from "@/contexts/form";
import { FormStepProvider } from "@/contexts/form-step";

export default function MultistepForm() {
  return (
    <FormStepProvider>
      <FormProvider>
        <FormStep />
      </FormProvider>
    </FormStepProvider>
  );
}
