import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardStrandType from "./DashboardStrandType";

function DashboardBurger() {
  return (
    <>
      {/*-- MAIN - NO FLEX --*/}
      <main
        className="login container-fluid position-relative"
        style={{ height: "94vh" }}
      >
        <div className="row h-100">
          <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
            <DashboardHeader />
            <DashboardStrandType />
          </section>
          <DashboardSidebar />
        </div>
      </main>
    </>
  );
}

export default DashboardBurger;
