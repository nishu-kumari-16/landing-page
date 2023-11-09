const Input = ({
  error,
  register,
  name,
  label,
  className,
  ...otherProps
}: any) => {
  return (
    <div className={`flex flex-col gap-2 ${className} justify-end rounded-md`}>
      {error && <div className="text-red text-xs">{error}</div>}
      <input
        {...register?.(name)}
        className={`border border-darkGray outline-none !text-xs rounded-md py-2 px-4 ${
          error && "!border-red"
        } `}
        {...otherProps}
      />
    </div>
  );
};
export default Input;
