import React, { useEffect } from "react";
import SectionWrapper from "../hoc/SectionWrapper";

function Resume() {
  useEffect(() => {
    // Path to your resume PDF file in the public folder
    const resumeUrl = "/smit-resume.pdf";
    window.open(resumeUrl, "_blank");
  }, []);

  return <div></div>;
}

export default SectionWrapper(Resume, "resume");
