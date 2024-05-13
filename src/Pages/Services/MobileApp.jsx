import TitleBgImage from "../../assets/featured-title-bg.png";

import MobileApp1Image from "../../assets/Mobile App/app-1-500x500.jpg";
import MobileApp2Image from "../../assets/Mobile App/app-2-500x500.jpg";
const MobileApp = () => {
  const contentData1 = [
    {
      title:
        "Now a day trends, applications are a vital piece of our everyday lives.",
    },
    {
      text: "The internet is a goldmine of possibilities for a wide range of firms global. Leverage its power to your skills. Set up your digital presence at present and become aware of your market knowledge with weboney internet advertising and digital marketing agency’s website design services. From website design and progress to search engine optimization (SEO) and website upkeep, we’ve got you covered!",
    },
    {
      text: "When developing scalable mobile apps, you should consider the screen size, hardware requirements, and many other factors. It is vital for entrepreneurs, startups, and developers to clearly understand and be familiar with the mobile application development process as more jobs are being created in this industry.",
    },
    {
      text: "While some are putting forth a valiant effort to remain in front of the tech bend, many are just gathering client interest for an application that makes their lives simpler. Weboney figuring out where your portable application thought fits is a significant advance toward realizing your thought.",
    },
  ];

  const contentData2 = [
    {
      title: "Mobile Application Projects",
      subtitle: "We've featured a few works and case studies so far",
      titleClasses: "pt-20 text-[48px] font-barlow font-bold text-[#292F42]",
      subtitleClasses: "text-[22px] leading-10 text-[#FFE665]",
    },
  ];
  return (
    <div>
      {/* Banner Image */}
      <div
        className="py-20  text-center bg-cover"
        style={{
          backgroundImage: ` url(${TitleBgImage})`,
        }}
      >
        <h1 className="font-barlow text-3xl font-semibold">
          We Offer The Most Complete IT Solutions
        </h1>
        <div className="mt-4">
          <hr className="mx-auto w-20 h-[0.9vh] bg-[#FFE665]"></hr>
        </div>
        <div className="flex justify-center items-center pt-10">
          <a
            href="/"
            className="block mr-4 font-roboto text-[16px] font-[400] hover:text-[#FFE665]"
          >
            Home
          </a>
          <span>/</span>
          <span className="ml-4 font-roboto">Mobile App Development</span>
        </div>
      </div>
      <div className="px-20 py-5">
        {contentData1.map((section, index) => (
          <div key={index} className="py-4">
            {section.title && (
              <h1 className="font-barlow text-2xl font-bold ">
                {section.title}
              </h1>
            )}
            {section.text && (
              <p className="font-roboto text-base leading-7 ">
                {typeof section.text === "string" ? (
                  section.text
                ) : (
                  <span className="text-red-500">{section.text}</span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center px-20 py-10">
        {contentData2.map((section, index) => (
          <div key={index}>
            <h1 className={section.titleClasses}>{section.title}</h1>
            <p className={section.subtitleClasses}>{section.subtitle}</p>
          </div>
        ))}
        <div className="flex gap-5 ml-20 pt-6">
          <img src={MobileApp1Image} alt="Mobile App1 Image" title="app1" />
          <img src={MobileApp2Image} alt="Mobile App2 Image" title="app2" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
