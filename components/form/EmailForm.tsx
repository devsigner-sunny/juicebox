import { useForm } from "react-hook-form";
import { useFormState } from "@/components/form/FormContext";
import IconButton from "@/components/IconButton";
import ArrowTop from "@/components/icons/ArrowTop";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/Juicebot.json";

type TFormValues = {
  email: string;
};

export function EmailForm() {
  const { setFormData, formData, onHandleBack, onHandleNext } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <>
      <div className="grid pt-6 pb-8 place-items-center">
        <Lottie
          animationData={lottieJson}
          play={false}
          style={{ width: 55, height: 55 }}
        />
      </div>
      <p className="__form-title">
        Let’s start with the basics. Type in your first name.
      </p>
      <form
        className="flex flex-col gap-4 mt-auto py-6"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="invisible">
            Email
          </label>
          <div className="relative wrapper">
            <input
              autoFocus
              id="email"
              {...register("email")}
              placeholder="Email address"
              className="__input-text"
              type="email"
              required={true}
            />

            <IconButton
              submit
              className="absolute top-1/2 translate-y-[-50%] right-3 "
              Icon={
                <ArrowTop
                  size={18}
                  className="transition fill-neutral-50/60 hover:fill-white"
                />
              }
              back
            />
          </div>
          <button
            type="button"
            onClick={onHandleBack}
            className="inline-block px-6 font-semibold text-white bg-blue-600 rounded-md h-11"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
}
