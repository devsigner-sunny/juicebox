"use client";

import { useFormStep } from "@/hooks/use-form-step";
import { useForm } from "@/hooks/use-form";
import { ACTIONS } from "@/contexts/form";
import { TextInput } from "@/components/Form/TextInput";
import { FormFooter } from "@/components/Form/FormFooter";
import { FormHeader } from "@/components/Form/FormHeader";

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
    <>
      <FormHeader>
        Let’s start with the basics. Type in your first name.
      </FormHeader>
      <div className="field relative mt-auto">
        <TextInput
          label="First name"
          placeholder="First name"
          value={nameField.value}
          onChange={(value: string) =>
            dispatchNameField({ type: ACTIONS.SET_VALUE, value })
          }
          errorMessage={nameField.errorMessage}
          clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
          hasError={nameField.hasError}
        />
        <FormFooter
          handleGoForwardStep={handleGoForwardStep}
          handleGoBack={handlePreviousStep}
        />
      </div>
    </>
  );
}
