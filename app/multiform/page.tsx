"use client";
import { EmailForm } from "@/components/form/EmailForm";
import { useFormState } from "@/components/form/FormContext";
import { UserNameForm } from "@/components/form/UserNameFrom";
import { Summary } from "@/components/form/Summary";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <UserNameForm />;
    case 2:
      return <EmailForm />;
    case 3:
      return <Summary />;
    default:
      return null;
  }
}

export default function MultiForm() {
  return (
    <div className="flex flex-col w-full">
      <ActiveStepFormComponent />
    </div>
  );
}
