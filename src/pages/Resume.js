import React, { useEffect, useState } from "react";
import Education from "../components/Education";

export default function Resume() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/education")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  console.log(education);

  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {education.map((education) => (
                <Education education={education} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
