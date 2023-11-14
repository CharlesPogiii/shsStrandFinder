import Localhost from "../../../js/model/LocalHost";

Localhost;

function SidebarStrand({ selectedStrand }) {
  return (
    <>
      <h6 className="roboto text-light px-4 py-3">
        Preferred Strand (Selected)
      </h6>
      <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
        {selectedStrand ? (
          <img
            src={Localhost.path() + selectedStrand.imagePath}
            alt="strand image display"
            style={{ height: "175px" }}
          />
        ) : (
          <></>
        )}
        <h6 className="roboto text-light my-3 px-4 py-3">
          {selectedStrand ? selectedStrand.name : "No Selected Strand"}
        </h6>
        <p className="roboto text-light px-4">
          {selectedStrand
            ? selectedStrand.description
            : "If you have already preferred STRAND to take, just CLICK any strand at the DASHBOARD PAGE. (TAKE NOTE that this is optional)"}
        </p>
      </div>
    </>
  );
}

export default SidebarStrand;
