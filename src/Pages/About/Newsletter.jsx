import NewsletterBgImage from "../../assets/email-network-communication-perforated-paper-sign.jpg";

const Newsletter = () => {
  return (
    <div className="w-full flex flex-col">
    {/* Background image */}
    <div
      className="h-[96vh] bg-cover bg-center bg-no-repeat text-[#292F42] relative"
      style={{
        backgroundImage: `linear-gradient(to right, #000, #2e35488f), url(${NewsletterBgImage})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col pt-32 text-center">
        <h1 className="font-roboto text-[15px] font-[400] text-[#FFE665]">
          BE SURE TO GET THE LATEST EXCLUSIVE OFFERS, PRODUCT RELEASES, AND SO MUCH MORE
        </h1>
        <p className="pl-20 px-20 mt-4 font-barlow text-[#ffffff] text-[52px] font-300">
          Sign up and subscribe to our newsletter and get inspired every month
        </p>
      </div>
      <div className="absolute inset-0 flex items-center pt-60 pl-20 px-20">
        <form id="emailForm" className="w-full flex justify-center">
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
  </div>
  
  );
};

export default Newsletter;
