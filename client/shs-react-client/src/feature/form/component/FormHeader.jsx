function FormHeader({ title, instruction }) {
  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">{title}</h2>
          <p className="card-text my-4 roboto">{instruction}</p>
        </div>
      </header>
    </>
  );
}

export default FormHeader;
