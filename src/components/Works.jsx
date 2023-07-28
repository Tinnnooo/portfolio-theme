import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

export default function Works() {
  return (
    <div className="py-12">
      <SectionTitle id="works"> Recent works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            title={work.title}
            imgUrl={work.imgUrl}
            tech={work.tech}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
}
