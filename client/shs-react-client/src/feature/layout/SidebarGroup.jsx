import { modalType } from "../modal/modalType";
import {
  accessRoute,
  formStrandTypeRoute,
  formStrandRoute,
  formSubjectTypeRoute,
  formSubjectRoute,
  formPersonalEngagementRoute,
  formAssessmentRoute,
} from "../../route/routes";
import SidebarButton from "../dashboard/component/SidebarButton";

function SidebarGroup({ user }) {
  return (
    <>
      {user?.isAdmin == true ? (
        <>
          <SidebarButton
            label="New Strand Type"
            icon1="fa-brands fa-firstdraft"
            icon2="fa-solid fa-computer-mouse"
            path={formStrandTypeRoute.path}
          />
          <SidebarButton
            label="New Strand"
            icon1="fa-solid fa-person-booth"
            path={formStrandRoute.path}
            icon2="fa-solid fa-computer-mouse"
          />
          <SidebarButton
            label="New Subject Type"
            icon1="fa-solid fa-book"
            icon2="fa-solid fa-computer-mouse"
            path={formSubjectTypeRoute.path}
          />
          <SidebarButton
            label="New Subject"
            icon1="fa-solid fa-note-sticky"
            icon2="fa-solid fa-computer-mouse"
            path={formSubjectRoute.path}
          />
          <SidebarButton
            label="New Personal Engagement"
            icon1="fa-solid fa-id-badge"
            icon2="fa-solid fa-computer-mouse"
            path={formPersonalEngagementRoute.path}
          />
          <SidebarButton
            label="New Assessment Question"
            icon1="fa-solid fa-circle-question"
            icon2="fa-solid fa-computer-mouse"
            path={formAssessmentRoute.path}
          />
          <SidebarButton
            label="Authorize Access"
            icon1="fa-solid fa-gamepad"
            icon2="fa-solid fa-computer-mouse"
            color="text-danger"
            path={accessRoute.path}
          />
        </>
      ) : (
        <></>
      )}
      <SidebarButton
        label="Logout"
        icon1="fa-solid fa-right-from-bracket"
        icon2="fa-solid fa-computer-mouse"
        color="text-danger"
        toggle={true}
        target={modalType.LOGOUT}
      />
    </>
  );
}

export default SidebarGroup;
