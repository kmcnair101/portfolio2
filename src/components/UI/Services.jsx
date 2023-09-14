import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="work" className="bg-black">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-teal-400 font-[800] text-[2.4rem] mb-5">
            How I Can Help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            I specialize in developing dynamic and responsive web applications,
            crafting intuitive user interfaces, improving user experiences, and
            architecting robust back-end systems (which may help improve sales
            conversion and profit). <br />
            Whether it's designing engaging user experiences, optimizing
            performance, or solving complex technical challenges, I'm here to
            elevate your digital projects to the next level.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-teal-400 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-black font-[700] mb-3 group-hover:font-[800] text-xl">
                          Full Stack Developer
                        </h3>
                        <h4 className="text-black text-[16px] font-[500] italic">
                          The Goose Financial
                        </h4>
                        <br />
                        <p className="text-[15px] leading-7">
                        Lead web app development and database management, integrate APIs, collaborate for innovation at The Goose Financial.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-black font-[700] mb-3 group-hover:font-[800] text-xl">
                          Front End Developer
                        </h3>
                        <h4 className="text-black text-[16px] font-[500] italic">
                          Freelance
                        </h4>
                        <br />
                        <p className="text-[15px] leading-7">
                        Designed user-friendly web interfaces, integrated multimedia content, managed multiple projects, and improved website aesthetics and functionality for clients.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-black font-[700] mb-3 group-hover:font-[800] text-xl">
                        Electronic Assembly Inspector
                        </h3>
                        <h4 className="text-black text-[16px] font-[500] italic">
                          Benchmark Electronic
                        </h4>
                        <br />
                        <p className="text-[15px] leading-7">
                        Conducted comprehensive testing of both hardware and software in the PCB system. Gained expertise in terminal operations, JSON file manipulation, and Python programming for efficient PCB software operation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
