import { modalType } from "../modal/modalType";
import SubjectC from "./SubjectC";
import $ from "jquery";

function SubjectStrand({ user, strand }) {
  return (
    <>
      {/*-- SUBJECT TYPE CONTAINER --*/}
      <section className="subject-type-container mt-5">
        <h4 className="w-100 text-primary poppins border-bottom border-dark text-uppercase fw-semibold">
          {strand.name}
        </h4>
        <section className="row">
          {strand?.subjects?.map((subject, i) => {
            return <SubjectC key={i} user={user} subject={subject} />;
          })}
        </section>
      </section>
    </>
  );
}

export default SubjectStrand;
