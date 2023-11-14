function FormRadioBtn({ name, subjectType, onChangeCb, checked = false }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={name}
        onChange={onChangeCb}
        id={subjectType._id}
        checked={checked}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor={subjectType._id}>
        {subjectType.name}
      </label>
    </>
  );
}

export default FormRadioBtn;
