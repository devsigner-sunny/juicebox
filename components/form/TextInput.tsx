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
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-brand-black text-xs sm:text-sm	">{label}</label>
        {hasError && (
          <span className="text-red text-xs sm:text-sm">{errorMessage}</span>
        )}
      </div>
      <input
        className={`
          bg-transparent px-3 py-2 rounded-lg border-[1px] text-brand-black 
          placeholder:text-white/60 traking-[.2em]
          focus:outline-none focus:border-brand-primary ${
            hasError ? "border-red" : "border-white/60"
          }
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
