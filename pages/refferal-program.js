import React from "react";
import RefferalProgram from "../components/layouts/page/refferalProgram/RefferalProgram";
import ProfileLayout from "../components/layouts/ProfileLayout";

export default function Home(props) {
  return (
    <>
      <ProfileLayout>
        <RefferalProgram />
      </ProfileLayout>
    </>
  );
}
