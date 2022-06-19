import "./form-input.styles.scss";

const FormInput = ({ label, ...otherpProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherpProps} />
      {label && (
        <label
          className={`${
            otherpProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
