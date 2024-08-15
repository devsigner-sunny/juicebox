"use client";
import { useFormStep } from "@/hooks/use-form-step";
import { useForm } from "@/hooks/use-form";
import { ACTIONS } from "@/contexts/form";

import { TextInput } from "@/components/Form/TextInput";
import { FormFooter } from "@/components/Form/FormFooter";

export function UserEmail() {
  const { emailField, dispatchEmailField } = useForm();

  const { handleNextStep, handlePreviousStep } = useFormStep();

  function validateForm() {
    let formHasError = false;

    if (!emailField.value) {
      dispatchEmailField({
        type: ACTIONS.SET_ERROR,
        errorMessage: "Email is required",
      });
      formHasError = true;
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({
          type: ACTIONS.SET_ERROR,
          errorMessage: "Email is invalid",
        });
        formHasError = true;
      }
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
      <div className="mt-5 flex flex-col gap-4">
        <TextInput
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          value={emailField.value}
          onChange={(value: string) =>
            dispatchEmailField({ type: ACTIONS.SET_VALUE, value })
          }
          errorMessage={emailField.errorMessage}
          clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
          hasError={emailField.hasError}
        />
      </div>
      <FormFooter
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </>
  );
}
