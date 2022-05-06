import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactSkill from "../assets/react.png";
import Nodejs from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Redux from "../assets/redux.jpeg";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
      
    <div name="skills" className="w-full h-full md:h-screen bg-white text-black pb-4 mb-10">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Skills
          </p>
          <p className="py-4 text-lg">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Html} alt="html" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Css} alt="html" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Javascript} alt="html" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={ReactSkill} alt="html" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Redux} alt="html" className="w-30 mx-auto" />
            <p className="my-4">Redux</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Nodejs} alt="html" className="w-20 mx-auto" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Mongo} alt="html" className="w-20 mx-auto" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-lg rounded-lg hover:scale-110 duration-500 p-2">
            <img src={Firebase} alt="html" className="w-20 mx-auto" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
