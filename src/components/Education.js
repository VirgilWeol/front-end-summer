import React from "react";

export default function Education({ education }) {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <div className="text-secondary fw-bolder mb-2">
                {education.year}
              </div>
              <div className="mb-2">
                <div className="small fw-bolder">{education.name}</div>
                <div className="small text-muted">{education.location}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>{education.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
