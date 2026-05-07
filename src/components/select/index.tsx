import useSelect, { type ISelectProps } from "./useSelect";

export default function Select({
    name,
    options,
    required = false,
    state,
    placeholder = "Select an option",
    className,
    setState,
    ...rest
}: ISelectProps) {
    const { handleChange, validateOnBlur } = useSelect(
        state,
        required,
        setState,
    );

    return (
        <div className="relative flex w-full flex-col gap-1">
            {/* //* SELECT */}
            <select
                name={name}
                id={name}
                className={`text-textcolor block w-full rounded-md border-2 border-light/20 bg-transparent px-3 py-2.5 text-sm -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-500 disabled:opacity-50 disabled:ring-0 sm:text-sm/6 md:text-sm ${
                    state.error ? "border-red-600" : "border-light/20"
                } ${className}`}
                value={state.value}
                onChange={handleChange}
                onBlur={(e) => validateOnBlur(e)}
                onFocus={() =>
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    setState((prev: any) => ({ ...prev, dirty: true }))
                }
                required={required}
                {...rest}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option
                        className="bg-light-300 text-dark"
                        key={index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {/* //* ERROR MESSAGE */}
            <p className="text-sm text-error">{state.message}</p>
        </div>
    );
}
