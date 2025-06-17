import { Card } from "../components/card";
import { ranchers } from "../libs/fonts";

export const Projects = () => {
  return (
    <div className="bg-light-yellow">
      <div className="container py-16">
        {/* <div className="border-pink border-b-8 mb-6"> */}
          <h1 className={`${ranchers.className} text-48 leading-none inline-block text-green  mb-9 px-2 border-pink border-b-8`}>
            My Works & Projects
          </h1>
        {/* </div> */}
        <div className="grid grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
