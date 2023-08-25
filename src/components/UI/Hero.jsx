import React from "react";
import HeroImage from "../../assets/images/IMG_2630.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0 bg-black" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-teal-400 font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 "
            >
              Kris McNair <br />
              Software Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor hover:text-black ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor hover:border-teal-400 hover:text-teal-400"
              >
                See portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              Innovative Full Stack Developer blending creativity and technology
              to craft seamless web and mobile solutions that captivate users.
              Proficient in front-end and back-end development, I bring ideas to
              life with a fusion of artistry and innovation.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600] ">
                Follow me:
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kris-mcnair/"
                  className="text-smallTextColor text-[18px] font-[600] hover:text-teal-400"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://github.com/kmcnair101"
                  className="text-smallTextColor text-[18px] font-[600] hover:text-teal-400"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={HeroImage} alt="" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={0.1} suffix="" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={12} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={8} duration={2} suffix="" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
