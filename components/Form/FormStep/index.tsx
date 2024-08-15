import { useFormStep } from "@/hooks/use-form-step";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { Summary } from "./Summary";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/JB2G_JAI.json";

function ActiveStepFormComponent() {
  const { currentStep } = useFormStep();

  switch (currentStep) {
    case 1:
      return <UserName />;
    case 2:
      return <UserEmail />;
    case 3:
      return <Summary />;
    default:
      return null;
  }
}

export function FormStep() {
  const { currentStep } = useFormStep();

  return (
    <div className="flex flex-col w-full min-h-[517px]">
      <div className="grid pt-6 pb-8 place-items-center">
        <Lottie
          animationData={lottieJson}
          play={currentStep == 3 ? true : false}
          style={{ width: 55, height: 55 }}
        />
      </div>
      <ActiveStepFormComponent />
    </div>
  );
}
