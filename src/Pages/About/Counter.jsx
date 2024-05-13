import { FaTrophy, FaThumbsUp, FaSmile, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

const Counter = () => {
  const data = [
    {
      title: "Years of Experience",
      icon: <FaTrophy className="text-[36px] text-[#FFE665]" />,
      value: 5,
    },
    {
      title: "Successful Projects",
      icon: <FaThumbsUp className="text-[36px] text-[#FFE665]" />,
      value: 1000,
    },
    {
      title: "Happy Clients",
      icon: <FaSmile className="text-[36px] text-[#FFE665]" />,
      value: 100,
    },
    {
      title: "Team Members",
      icon: <FaUsers className="text-[36px] text-[#FFE665]" />,
      value: 14,
    },
  ];

  return (
    <div className="flex px-20 gap-20 py-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#292F42] rounded-md w-[250px] flex flex-col  py-1"
        >
          <h1 className="font-barlow text-18 font-500 text-center p-2 mt-6 text-white">
            {item.title}
          </h1>
          <div className="flex justify-center items-center gap-3">
            {item.icon}
            <CountUp
              start={0}
              end={item.value}
              duration={10}
              separator=","
              decimals={0}
              useEasing={true}
              className="font-roboto text-[42px] font-500 text-[#FFE665]"
            />
              {/* Add the "+" sign */}
              <span className="text-[#FFE665] text-[36px] font-bold">+</span>
          </div>
          </div>
        
      ))}
    </div>
  );
};

export default Counter;
