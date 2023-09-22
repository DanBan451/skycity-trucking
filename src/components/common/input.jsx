
const Input = ({ name, value, onChange, label, error, classes  }) => {
  return (
    <div className={[classes.required]}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={classes.input}
        />
        {error && <div className={`alert alert-danger m-0${classes.error}`}>{error}</div>}
    </div>
  );
};

export default Input;
