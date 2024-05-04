import TitleBgImage from "../../assets/featured-title-bg.png";
import Newsletter from "./Newsletter";
window.scrollTo(0, 0);

const Career = () => {
  return (
    <div>
      {/* Banner Image */}
      <div
        className=" py-20 px-20 text-center bg-cover"
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
          <span className="ml-4 font-roboto">Career</span>
        </div>
      </div>
      
<div className="container mx-auto py-6 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Join Our Team
        </h1>
        <div className="flex flex-col md:flex-row gap-4 pb-6">
          <div className="w-full md:w-1/3">
            
            <select
              id="category"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            >
              <option value="Engineering">All Job Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/3">
           
            <select
              id="jobType"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            >
              <option value="All Job Type">All Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              {/* Add more job types as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/3">
           
           
            <select
              id="jobType"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            >
               <option value="All Job Location">All Job Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Cochin">Cochin</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {/* Add your application form here */}
        </div>
      </div>

      <Newsletter/>

    </div>
  );
};

export default Career;
