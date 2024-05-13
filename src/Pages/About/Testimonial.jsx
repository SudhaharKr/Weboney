import UserIconImage from '../../assets/user-icon-trendy.png'; // Import your user icon image here

const testimonials = [
  {
    name: "Mr. Pushparajan S",
    company: "Pupa Home Care",
    content: `"This is to Mrs. Keerthana Rajan, Weboney, for their hard working, reliable, and good spirit. We would say that they are one of the few designers we have seen who have a coherent sense of style, the digital experience by their design. We were able to see their style, sense of creativity and colors in their work. They provide their service on time. And was trusting that their expertise would be what we were looking for. Couple this with their ability to create whatever we asked them to do was quite amazing. We would recommend you for our people. We are very happy to get service from you. Regards, Mr. Pushparajan."`
  },
  {
    name: "Mr. Kumaran P",
    company: "M . P Dental Clinic",
    content: `"An appreciation of service from Dr P.Kumaran M.P.Dental Clinic to Mrs Keerthana Weboney deigns. We started Our digital awareness program through Weboney. Their team was very energetic and vibrant. They spent a lot of time in understanding our needs and responded very innovatively. Their design were always very creative and trendy. I also recommend Mrs Keerthana to my friends and relatives for their great service."`
  },
  {
    name: "Mr. Sasikumar D",
    company: "SS Tally Soft Care",
    content: `"Hi Keerthana Rajan of Weboney, I am Sasikumar of Ss Tally Soft Care, for the past days we and our friends given order for digital marketing and website order. Me and my friends had very good experience with that order, seems very value creating and also referral creating webpage. None other company do like that i.e., continuous support, good response and all other things. In Future we and our clients like to recommend all business people. Thanks and All the Best."`
  }
];

const Testimonial = () => {
  return (
    <div className="p-20 text-center">
    <h1 className="font-barlow text-[34px] font-600">
      What our clients are saying about our company and products
    </h1>
    <div className="flex gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-[460px] h-[90vh] mt-16 border-2 rounded-md group hover:bg-[#FFE665] transition-all duration-1000 ease-in-out">
        
          <div className="flex flex-col justify-center items-center">
            <img
              src={UserIconImage}
              alt="User Icon Image"
              className="w-[80px] rounded-full mb-4 -mt-[40px] border-2"
            />
            <h1 className="text-black font-barlow font-[600] text-[20px]">
              {testimonial.name}
            </h1>
            <h1 className="font-roboto text-[14px] mt-2 text-black/60">
              {testimonial.company}
            </h1>
            <hr className="w-[340px] min-h-1 border-[#292F42] mt-3" />
            <p className="p-4 font-roboto text-[16px] pl-5 pr-5 text-justify text-black/60">
              {testimonial.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Testimonial;
