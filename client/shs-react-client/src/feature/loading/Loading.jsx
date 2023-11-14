function Loading() {
  return (
    <>
      <section className="position-absolute top-50 start-50 translate-middle text-center">
        <section>
          <i className="fa-solid fa-spinner fs-1 text-primary"></i>
        </section>
        <p className="roboto mt-4">Data are processing. Please wait...</p>
      </section>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default Loading;
