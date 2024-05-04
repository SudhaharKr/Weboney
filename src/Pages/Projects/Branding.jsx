


import sstallybrandImage from "../../assets/sstallybrand-370x370.jpg";

const Branding = () => {
  return (
    <div className="pl-20 px-20 mt-20">
        <div className="flex">
      <img
        src={sstallybrandImage}
        alt="sstallybrand Image"
        className="w-[600px]"
      />
      <div className="w-[600px] h-[80vh]">
        <h1 className="p-10 font-barlow text-[42px] font-[600]">
          SS Tally Care
        </h1>
        </div>
      </div>
      <div>
  <h1 className="uppercase font-barlow text-4xl font-bold pt-20 text-center">related projects</h1>

</div>

    </div>
  );
};

export default Branding;
