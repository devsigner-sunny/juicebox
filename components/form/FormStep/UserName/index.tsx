"use client";

import { Fragment } from "react";
import { useFormStep } from "@/hooks/use-form-step";
import { useForm } from "@/hooks/use-form";
import { ACTIONS } from "@/contexts/form";

import { TextInput } from "@/components/Form/TextInput";
import { FormFooter } from "@/components/Form/FormFooter";

export function UserName() {
  const { nameField, dispatchNameField } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();

  function validateForm() {
    let formHasError = false;

    if (!nameField.value) {
      dispatchNameField({
        type: ACTIONS.SET_ERROR,
        errorMessage: "Name is required",
      });
      formHasError = true;
    }
    return !formHasError;
  }

  function handleGoForwardStep() {
    const isValid = validateForm();
    if (isValid) {
      handleNextStep();
    }
  }

  return (
    <Fragment>
      <div className="mt-5 flex flex-col gap-4">
        <TextInput
          label="Name"
          placeholder="e.g. Stephen King"
          value={nameField.value}
          onChange={(value: string) =>
            dispatchNameField({ type: ACTIONS.SET_VALUE, value })
          }
          errorMessage={nameField.errorMessage}
          clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
          hasError={nameField.hasError}
        />
      </div>
      <FormFooter
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  );
}
