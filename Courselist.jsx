"use client";
import React from "react";
// Import check: react-icons/fa use karein agar icons show nahi ho rahe
import { courses } from "./Data";
import Link from 'next/link';

const CourseList = () => {
  return (
    /* Hum ne inline style hata kar className 'animated-gradient-bg' laga di hai */
    <div className="animated-gradient-bg" style={{ padding: "50px" }}>
      <h1 className="text-center text-light my-3">
        Welcome To CourseZone - Following Courses We Offer
      </h1>
      
      <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div
                className="card p-4 text-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect ke liye thora transparent
                  backdropFilter: "blur(5px)",
                  borderRadius: "12px",
                  maxWidth: "300px",
                  width: "100%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div className="display-4 mb-3 text-light">{course.icon}</div>
                <h5 className="card-title text-light">{course.title}</h5>
                <Link
                  href={`/projects/project_1/${course.id}`}
                  className="btn btn-outline-warning mt-4"
                >
                  Explore Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
