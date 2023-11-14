function FormCheckbox({ strandType, onChangeCb, checked }) {
  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        onChange={onChangeCb}
        id={strandType._id}
        checked={checked}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor={strandType._id}>
        {strandType.name}
      </label>
    </>
  );
}

export default FormCheckbox;
