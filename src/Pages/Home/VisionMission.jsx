import { useState } from "react";
import VisonandMissionBackgroundImage from "../../assets/office-md-room.png";
import VideoBg from "../../assets/videobg.jpg";
import { IoMdPlay } from "react-icons/io";

const VisionMission = () => {
  // video
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(!showVideo);
  };

  // visson & mission
  const [activeTab, setActiveTab] = useState("Vision");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative min-h-screen flex lg:flex-row flex-col">
      {/* Background image */}
      <div
        className="w-[1400px] min-h-screen-[600vh]  relative bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, #000, #4149639d), url(${VisonandMissionBackgroundImage})`,
        }}
      ></div>
      {/* Video */}
      <div className="absolute lg:w-[50%] w-full min-h-screen flex items-center justify-center">
        <div
          className="w-[500px] h-[500px] rounded-lg relative"
          style={{ background: `url(${VideoBg}) ` }}
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            <span
              onClick={playVideo}
              className="bg-black text-white w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center"
            >
              <IoMdPlay />
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="absolute right-2 lg:w-[50%] min-h-screen py-16 mr-10">
        <h1 className="uppercase text-[#FFE665] font-roboto text-[15px]">
          Transforming Ideas into Engaging Websites and Marketing Solutions
        </h1>
        <h1 className="pt-4 text-white font-barlow text-[28px]">
          Transforming Remodeling Ventures through Design, Development, and
          Digital Strategy
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex pt-4">
            {/* Tab 1 */}
            <button
              className={`text-white py-4 px-6 block font-roboto text-[16px] font-bold border-6 ${
                activeTab === "Vision" &&
                "border-b-2 border-gray-800 bg-[#1B2335] opacity-60 border-2"
              }`}
              onClick={() => handleTabClick("Vision")}
            >
              Our Vision
            </button>

            {/* Tab 2 */}
            <button
              className={`text-white py-4 px-6 block font-roboto text-[16px] font-bold border-6 ${
                activeTab === "Mission" &&
                "border-b-2 border-gray-800 bg-[#1B2335] opacity-60 border-2"
              }`}
              onClick={() => handleTabClick("Mission")}
            >
              Our Mission
            </button>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {/* Tab 1 content */}
            <div className={`${activeTab === "Vision" ? "" : "hidden"}`}>
              <p className="font-roboto text-[16px] p-6 -mt-8 border-2 bg-[#1B2335] opacity-60 text-white border-gray-800">
                The vision of Weboney is to be a worldwide innovator in giving
                the best and novel IT answer for improve your efficiency and
                business strength. Our attempt is to be effectively refreshed
                with the most recent patterns of the business just as the
                innovation utilized in the IT business. We work with the part of
                imagination, at that point comes trust to construct a solid
                relationship with our customers for quite a while of period.
              </p>
            </div>

            {/* Tab 2 content (hidden by default) */}
            <div className={`${activeTab === "Mission" ? "" : "hidden"}`}>
              <p className="font-roboto text-[16px] p-6 -mt-8 border-2 bg-[#1B2335] opacity-60 text-white border-gray-800">
                The mission of Weboney – Website Design, Branding and Digital
                Marketing Technology Company is to make inventive ideas and
                convey special administrations which measure quality and
                consumer loyalty to enhance your business. Our committed groups
                particularly center around the necessities and prerequisites of
                the customers to fabricate solid and long haul relations. With
                the intend to satisfy the customers needs, our cooperation to
                bring effective development for different organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video shown */}
      {showVideo && (
        <div
          onClick={playVideo}
          className="absolute top-0 bg-[#ffffff9a] p-10 center_div w-screen h-screen"
        >
          <iframe
            className="w-[80%] h-full"
            src="https://www.youtube.com/embed/aAyG7GM6ZnU?si=EII94kIK_EMOTI2o"
            title="YouTube video player"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VisionMission;
