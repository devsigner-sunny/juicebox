"use client";
import { EmailForm } from "@/components/form/EmailForm";
import { useFormState } from "@/components/form/FormContext";
import { UserNameForm } from "@/components/form/UserNameFrom";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <UserNameForm />;
    case 2:
      return <EmailForm />;
    default:
      return null;
  }
}

export default function MultiForm() {
  return (
      <div className="flex flex-col w-full h-full">
				<ActiveStepFormComponent />
      </div>
  );
}
