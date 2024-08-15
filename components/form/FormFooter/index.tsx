import { useFormStep } from "../../../hooks/use-form-step";
import { ArrowTop } from "@/components/Icons/ArrowTop";
import { Button } from "@/components/Button/Button";

interface FormFooterProps {
  handleGoBack: () => void;
  handleGoForwardStep: () => void;
}

export function FormFooter({ handleGoForwardStep }: FormFooterProps) {
  const { currentStep, totalSteps } = useFormStep();
  const isLastStep = currentStep === totalSteps;

  return (
    <>
      {isLastStep ? (
        <Button
          label="Continue"
          type="invert"
          onClick={handleGoForwardStep}
          className="mt-auto"
        />
      ) : (
        <button
          role="button"
          onClick={handleGoForwardStep}
          className="
					absolute top-1/2 right-3 translate-y-[-50%] w-[31px] h-[31px] rounded-full bg-white/60 grid place-items-center hover:bg-white/40 focus:outline-brand-primary focus:bg-white/40"
        >
          <ArrowTop
            size={18}
            className="transition fill-neutral-50/60 hover:fill-white"
          />
        </button>
      )}
    </>
  );
}
