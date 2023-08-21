import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { images, imgVariants, txtVariants } from "../variables";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Problems = () => {
    const [isDesktopMode, setIsDesktopMode] = useState(true);
    const buttonInnerRef = useRef(null);

    const toggleMode = () => {
        if (buttonInnerRef.current) {
            if (isDesktopMode) {
                buttonInnerRef.current.style.translate = "-98px";
            } else {
                buttonInnerRef.current.style.translate = "0px";
            }
        }

        setIsDesktopMode(!isDesktopMode);
    };

    return (
        <motion.div
            className="relative my-[100px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className=" container ">
                <div className=" grid lg:grid-cols-2 ">
                    <motion.div
                        className=" h-[475px] flex justify-center "
                        variants={imgVariants}
                    >
                        <div className=" w-full relative z-20">
                            <Swiper
                                navigation={{
                                    nextEl: ".right-arrow-button",
                                    prevEl: ".left-arrow-button",
                                }}
                                modules={[Navigation]}
                            >
                                {isDesktopMode
                                    ? images.desktop.map((desktopImg) => (
                                          <SwiperSlide key={desktopImg}>
                                              <img
                                                  src={desktopImg}
                                                  className=" relative w-full h-full z-20 "
                                                  alt="desktopImg.png"
                                              />
                                          </SwiperSlide>
                                      ))
                                    : images.mobile.map((mobileImg) => (
                                          <SwiperSlide key={mobileImg}>
                                              <img
                                                  src={mobileImg}
                                                  className=" relative w-fit h-[475px] mx-auto  z-20 "
                                                  alt="mobileImg.png"
                                              />
                                          </SwiperSlide>
                                      ))}
                            </Swiper>
                        </div>

                        {isDesktopMode ? (
                            <>
                                <img
                                    src="/assets/desktop.png"
                                    className=" h-full absolute z-30 pointer-events-none"
                                    alt="desktop.png"
                                />
                                {/* white background */}
                                <img
                                    src="/assets/desktop-bg.png"
                                    className=" absolute h-full"
                                    alt="desktop-bg.png"
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    src="/assets/mobile.png"
                                    className=" h-full absolute z-30 pointer-events-none"
                                    alt="mobile.png"
                                />
                                {/* white background */}
                                <img
                                    src="/assets/mobile-bg.png"
                                    className=" absolute h-full"
                                    alt="mobile-bg.png"
                                />
                            </>
                        )}
                    </motion.div>
                    <div
                        className=" text-white  p-14 pe-0  "
                        variants={txtVariants}
                    >
                        <div className=" w-[75%] h-full bg-gradient-to-r from-accentGreen to-accentBlue absolute top-0 right-0 -z-10"></div>
                        <motion.div
                            className=" grid gap-3"
                            variants={txtVariants}
                        >
                            <h4 className=" text-[32px] font-bold mb-4">
                                Their Old Website & Problems
                            </h4>
                            <ul className=" flex flex-col gap-4">
                                <li className=" flex items-start gap-2">
                                    <img
                                        src="/assets/arrow-pointing-to-right-1.svg"
                                        className=" p-2"
                                        alt="arrow-pointing-to-right-1.svg"
                                    />
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore
                                </li>
                                <li className=" flex items-start gap-2">
                                    <img
                                        src="/assets/arrow-pointing-to-right-1.svg"
                                        className=" p-2"
                                        alt="arrow-pointing-to-right-1.svg"
                                    />
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore
                                </li>
                                <li className=" flex items-start gap-2">
                                    <img
                                        src="/assets/arrow-pointing-to-right-1.svg"
                                        className=" p-2"
                                        alt="arrow-pointing-to-right-1.svg"
                                    />
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore
                                </li>
                            </ul>

                            <div className=" flex gap-4">
                                <span className=" cursor-pointer left-arrow-button">
                                    <img
                                        src="/assets/keyboard-left-arrow-button.svg"
                                        alt="keyboard-left-arrow-button-1.svg"
                                    />
                                </span>
                                <span className=" cursor-pointer right-arrow-button">
                                    <img
                                        src="/assets/keyboard-right-arrow-button-1.svg"
                                        alt="keyboard-right-arrow-button-1.svg"
                                    />
                                </span>
                            </div>

                            <div
                                onClick={() => toggleMode()}
                                className=" w-[164px] overflow-hidden border-2 border-white rounded-full p-2  px-8 font-bold bg-gradient-to-r from-accentBlue to-accentGreen cursor-pointer mt-3"
                            >
                                <div
                                    ref={buttonInnerRef}
                                    className=" h-full flex justify-start items-center gap-4 transition-all"
                                >
                                    <span>Desktop</span>
                                    <div className=" w-[30px] h-[30px] bg-white rounded-full flex-shrink-0"></div>
                                    <span>Mobile</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Problems;
