import { useEffect, useState } from "react";

import { useForm } from "@/hooks/use-form";
import { useFormStep } from "@/hooks/use-form-step";
import { FormFooter } from "@/components/Form/FormFooter";
import { FormHeader } from "@/components/Form/FormHeader";

export function Summary() {
  const [submitted, setSubmitted] = useState(false);

  const { handlePreviousStep, moveToStep } = useFormStep();

  const { clearForm, nameField, emailField } = useForm();

  function handleGoForwardStep() {
    setSubmitted(true);
  }

  useEffect(() => {
    if (submitted) {
      clearForm();

      setTimeout(() => {
        moveToStep(1);
      }, 1000);
    }
  }, [submitted, moveToStep]);

  return (
    <>
      <FormHeader>
        Thanks, {nameField.value}! Now, it’s time to get a reality check. <br />
        <br />
        This will take 2-3 minutes. 
      </FormHeader>
      <FormFooter
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </>
  );
}
