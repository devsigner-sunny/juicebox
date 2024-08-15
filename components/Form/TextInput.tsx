import { sohne } from "@/fonts";
import { useFormStep } from "@/hooks/use-form-step";
interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  errorMessage: string;
  hasError: boolean;
  clearError: () => void;
}

export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  hasError,
  clearError,
}: TextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onChange(value);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start">
        <label className="text-brand-black text-xs h-0 invisible">
          {label}
        </label>
        <span
          className={`text-red-500 text-sm absolute translate-y-[-100%] transition ${
            hasError ? "opacity-100" : "opacity-0 top-3"
          }`}
        >
          {errorMessage}
        </span>
      </div>
      <input
        className={`
          cursor-pointer bg-transparent min-h-[60px] px-3 py-[19px] rounded-[18px] border-[1px] text-white text-base pr-[43px]
          placeholder:text-white/60 traking-[.2em]
          focus:outline-none focus:border-brand-primary ${
            hasError ? "border-red-500" : "border-white/60"
          } ${sohne.className}
        `}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={() => clearError()}
        aria-label={placeholder}
        autoComplete={label}
        autoFocus
      />
    </div>
  );
}
