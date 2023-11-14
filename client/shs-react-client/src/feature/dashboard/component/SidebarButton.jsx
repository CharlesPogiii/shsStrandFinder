import { Link } from "react-router-dom";

function SidebarButton({
  label,
  icon1,
  icon2,
  color = "text-secondary",
  toggle = false,
  target = "",
  path = "",
  cb = null,
}) {
  return (
    <h6 className="roboto text-light border-bottom border-light px-4 py-3">
      {target.length > 0 ? (
        <a
          className="nav-link d-inline"
          onClick={(ev) => {
            ev.preventDefault();
            if (cb) cb();
          }}
          style={{ cursor: "pointer" }}
          data-bs-toggle={toggle ? "modal" : ""}
          data-bs-target={`#${target}`}
        >
          <i className={`${icon1} me-3`}></i>
          {label}
          <i
            className={`${icon2} ${color} fs-5 position-absolute end-0 me-4`}
          ></i>
        </a>
      ) : (
        <Link
          to={path}
          className="nav-link d-inline"
          style={{ cursor: "pointer" }}
        >
          <i className={`${icon1} me-3`}></i>
          {label}
          <i
            className={`${icon2} ${color} fs-5 position-absolute end-0 me-4`}
          ></i>
        </Link>
      )}
    </h6>
  );
}

export default SidebarButton;
