import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card } from "../components/card";
import { ranchers } from "../libs/fonts";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <div className="bg-light-yellow">
      <div className="container py-16">
        <div className="flex justify-between items-center mb-9">
          <h1
            className={`${ranchers.className} text-48 leading-none  text-green  px-2 border-pink border-b-8`}
          >
            My Works & Projects
          </h1>
          {/* <div
            className={`${ranchers.className} rounded-full bg-green text-light-yellow  px-4 py-2 text-20`}
          >
            ALL PROJECTS
            <ArrowForwardIcon
              className=" bg-pink rounded-full p-1 text-light-yellow ml-2"
              style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
            />
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
