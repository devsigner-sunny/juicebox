import { useFormState } from "@/components/form/FormContext";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/Juicebot.json";
export function Summary() {
  const { formData } = useFormState();

  const cleanedName = JSON.stringify(formData.username).replace(/"/g, "");

  return (
    <>
      <div className="grid pt-6 pb-8 place-items-center">
        <Lottie
          animationData={lottieJson}
          play
          style={{ width: 30, height: 30 }}
        />
      </div>
      <p className="__form-title">
        Thanks, {cleanedName}! Now, it’s time to get a reality check. 
        <br />
        <br />
        This will take 2-3 minutes. 
      </p>
    </>
  );
}
