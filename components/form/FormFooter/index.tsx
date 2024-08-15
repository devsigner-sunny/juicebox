import { useFormStep } from "../../../hooks/use-form-step";
import { ArrowTop } from "@/components/Icons/ArrowTop";
import { Button } from "@/components/Button/Button";

interface FormFooterProps {
  handleGoBack: () => void;
  handleGoForwardStep: () => void;
}

export function FormFooter({
  handleGoBack,
  handleGoForwardStep,
}: FormFooterProps) {
  const { currentStep, totalSteps } = useFormStep();
  const isLastStep = currentStep === totalSteps;

  return (
    <footer className="sunny p-4 bg-brand-black flex justify-between items-center">
      <button
        autoFocus
        role="button"
        onClick={handleGoBack}
        className={`border-none text-sm text-grey font-medium ${
          currentStep === 1 ? "invisible" : "visible"
        } sm:text-base`}
      >
        Go backs
      </button>

      <button
        onClick={handleGoForwardStep}
        className="p-3 absolute top-1/2 translate-y-[-50%] right-3"
      >
        {isLastStep ? (
          <Button
            label="Continue"
            type="invert"
            onClick={handleGoForwardStep}
            className="p-3 absolute top-1/2 translate-y-[-50%] right-3"
          />
        ) : (
          <ArrowTop
            size={18}
            className="transition fill-neutral-50/60 hover:fill-white"
          />
        )}
      </button>
    </footer>
  );
}
