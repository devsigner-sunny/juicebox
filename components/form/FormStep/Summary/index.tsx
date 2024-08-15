import { Fragment, useEffect, useState } from "react";

import { useForm } from "@/hooks/use-form";
import { useFormStep } from "@/hooks/use-form-step";
import { FormFooter } from "@/components/Form/FormFooter";

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
    <Fragment>
      <h2>Summary</h2>
      <h3>name: {nameField.value} </h3>
      <h3>email: {emailField.value} </h3>
      <FormFooter
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
