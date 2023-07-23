import { ChangeEvent, FocusEvent } from "react";
import classNames from "../../utils/classNames";

type SignInFieldProps = {
  type: string;
  label: string;
  value: string;
  errors: {
    dirty: boolean;
    error: boolean;
    message: string;
  };
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};
const SignInField = ({
  type,
  label,
  value,
  errors,
  onChange,
  onBlur,
}: SignInFieldProps) => {
  return (
    <div className="group relative mt-8">
      <input
        className={classNames(
          errors.dirty && errors.error ? "border-rose-500" : "border-white",
          "peer mb-2 w-full border-b-2 bg-transparent py-2 text-white outline-none"
        )}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type === "password" ? "password" : "text"}
        required
      />
      <label
        className="pointer-events-none absolute left-0 top-0 pb-2 pt-2 text-lg  text-white transition-all duration-500 group-focus-within:-top-6 group-focus-within:left-0 group-focus-within:text-base group-focus-within:text-primary-color peer-valid:-top-6 peer-valid:left-0 peer-valid:text-base peer-valid:text-primary-color"
        htmlFor={label}
      >
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      {errors.dirty && errors.error ? (
        <p className="italic text-rose-500">{errors.message}</p>
      ) : null}
    </div>
  );
};

export default SignInField;
