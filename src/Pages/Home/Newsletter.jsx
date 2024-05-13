import LightYellowBackground from "../../assets/yellow background.jpg";

const Newsletter = () => {
  return (
    <div className="relative flex">
      <img
        src={LightYellowBackground}
        alt="Light Yellow Background"
        className="w-full h-[30vh] opacity-70"
      />
      <div className="absolute inset-0 flex flex-col justify-center px-40">
        <h1 className="font-barlow text-2xl text-[#292F42]">
          Sign up and subscribe to our newsletter
        </h1>
        <p className="font-roboto text-sm mt-4 text-[#292F42]">
          We respect your privacy and do not tolerate spam
        </p>
      </div>
      <div className="absolute inset-0 px-[630px] flex items-center">
        <form id="emailForm" className="w-full flex">
          <input
            id="emailInput"
            type="email"
            placeholder="Enter your Email"
            className="h-12 pl-2 pr-20"
            required
          />
          <div className="flex">
            <button
              type="submit"
              className="font-roboto text-[16px] ml-2 bg-white text-black font-bold h-12 px-8 rounded-[4px] transition-colors duration-300 ease-in-out hover:bg-[#292F42] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
