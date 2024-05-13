import { FaArrowRight } from "react-icons/fa";
import OfficeBg from "../../assets/office-bg-image.webp";
import creativeImage from "../../assets/urban-double-exposure-collage-concept.jpg";
import PassionateImage from "../../assets/male-athlete-holding-medal.jpg";
import FullyCustomizableImage from "../../assets/digital-nomad-working-remotly-their-project.jpg";

const Services = () => {
  
  const data = [
    {
      id: 1,
      bgImage: creativeImage,
      name: "Creative",
      text: `Weboney group is among proficient design originators who you 
      can trust for outwardly engaging designs. At Weboney, the craftsman has 
      won a few challenges that say a lot about his inventiveness.`,
    },
    {
      id: 2,
      bgImage: PassionateImage,
      name: "Passionate",
      text: `A design plan that can produce a degree of enthusiasm will enjoy 
      a particular benefit as it makes a more grounded passionate association 
      with its intended interest group.`,
    },
    {
      id: 3,
      bgImage: FullyCustomizableImage,
      name: "Fully Customizable",
      text: `In the event that you notice the examples of overcoming
       adversity of effective organizations, you will see the one thing that 
       makes it not quite the same as others that different things are their unique 
       identity and pattern setting thoughts.`,
    },
    // Add more service objects here as needed
  ];

  return (
    <div className="max-w-full  min-h-screen flex flex-col">
      {/* Background image */}
      <div
        style={{
          backgroundImage: `linear-gradient(to right,
            #2e35488f,
            #2e35488f), url(${OfficeBg})`,
        }}
        className="h-[86vh] bg-cover bg-center bg-no-repeat text-white"
      >
        <div className="flex justify-between px-20 -mt-20 w-full h-full items-center">
          <div className="space-y-4">
            <h1 className="text-[15px] font-roboto text-[#FFE665] leading-[22.5px]">
              WITHIN SECONDS, GET MATCHED WITH TOP-RATED LOCAL PROS.
            </h1>
            <p className="text-[34px] font-barlow font-bold w-[700px] leading-[42.024px]">
              Here’s a look at some of our services. You can learn more about
              our work in detail
            </p>
          </div>
          <div>
          <a
          href="/contact"
          className="w-[200px] h-[70px] shadow-2xl flex hover:bg-white leading-[27px] mt-5 hover:text-yellow-600 cursor-pointer transition-all duration-1000 rounded text-white bg-[#353c4e8f] text-[18px] font-roboto items-center justify-center gap-2"
        >
          Get a Quote <FaArrowRight />
        </a>
           
          </div>
        </div>
      </div>
      {/* Service sections */}

      <div className="w-full h-[50%] bg-gray-300 px-20 flex justify-between relative p-6">
        {data.map((service) => (
          <div
            key={service.id}
            className="w-[30%] min-h-[700px] bg-white  border-2 -mt-52 rounded flex flex-col gap-y-2 items-center  hover:shadow-lg"
          >
          <div className="group">
              <img
                src={service.bgImage}
                alt={service.name}
                className="w-[320px] ml-4 h-[300px] rounded-t transition duration-500 ease-in-out transform group-hover:scale-110"
              />
              <p className="text-black text-center p-6 text-[24px] font-bold font-barlow">
                {service.name}
              </p>
              <hr className="w-[300px] border-gray-300 ml-14" />
              <p className="px-10 py-10 font-roboto text-[16px]">
                {service.text}
              </p>
              <button className="hover:text-[#FFE665] absolute px-[120px] bottom-10 flex items-center justify-center gap-2 font-bold font-roboto text-[16px] transition-all duration-700">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
