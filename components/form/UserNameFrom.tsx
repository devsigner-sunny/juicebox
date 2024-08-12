import { useForm } from "react-hook-form";
import { useFormState } from "@/components/form/FormContext";
import IconButton from "@/components/IconButton";
import ArrowTop from "@/components/icons/ArrowTop";
import Hexagon from "@/components/Hexagon/Index";

type TFormValues = {
  username: string;
};

export function UserNameForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
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
        <Hexagon size="small" />
      </div>
      <p className="__form-title">
        Let’s start with the basics. Type in your first name.
      </p>
      <form
        className="flex flex-col gap-4 mt-auto"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="invisible">
            Username
          </label>
          <div className="relative wrapper">
            <input
              id="username"
              {...register("username")}
              placeholder="First name"
              className="__input-text"
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
        </div>
      </form>
    </>
  );
}
