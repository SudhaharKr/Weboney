import { FaTrophy, FaThumbsUp, FaSmile, FaUsers } from "react-icons/fa";

const Counter = () => {
  const data = [
    {
      title: "Years of Experience",
      icon: <FaTrophy className="text-[46px] text-[#FFE665]" />,
      value: "5+",
    },
    {
      title: "Successful Projects",
      icon: <FaThumbsUp className="text-[46px] text-[#FFE665]" />,
      value: "1000+",
    },
    {
      title: "Happy Clients",
      icon: <FaSmile className="text-[46px] text-[#FFE665]" />,
      value: "100+",
    },
    {
      title: "Team Members",
      icon: <FaUsers className="text-[46px] text-[#FFE665]" />,
      value: "14+",
    },
  ];
  return (
    <div className="flex justify-center ml-20 mr-20 gap-6 py-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#292F42] rounded-md w-[250px] flex flex-col items-center py-1"
        >
          <h1 className="font-barlow text-18 font-500 text-center p-2 mt-6 text-white">
            {item.title}
          </h1>
          <div className="flex justify-center items-center gap-3">
            {item.icon}
            <h1 className="font-roboto text-[42px] font-500 text-[#FFE665]">
              {item.value}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
