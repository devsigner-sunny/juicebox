"use client";
import { useFormStep } from "@/hooks/use-form-step";
import { useForm } from "@/hooks/use-form";
import { ACTIONS } from "@/contexts/form";

import { TextInput } from "@/components/Form/TextInput";
import { FormFooter } from "@/components/Form/FormFooter";
import { FormHeader } from "@/components/Form/FormHeader";
import { FieldWrapper } from "@/components/Form/FieldWrapper";

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
      <FormHeader>
        How should we contact you? Type in your email address.
      </FormHeader>
      <FieldWrapper>
        <TextInput
          label="Email address"
          placeholder="Email address"
          value={emailField.value}
          onChange={(value: string) =>
            dispatchEmailField({ type: ACTIONS.SET_VALUE, value })
          }
          errorMessage={emailField.errorMessage}
          clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
          hasError={emailField.hasError}
        />
        <FormFooter
          handleGoForwardStep={handleGoForwardStep}
          handleGoBack={handlePreviousStep}
        />
      </FieldWrapper>
    </>
  );
}
