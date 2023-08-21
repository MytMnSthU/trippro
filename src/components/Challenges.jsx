import { motion } from "framer-motion";
import { useState } from "react";
import { imgVariants, txtVariants } from "../variables";
import { PropagateLoader } from "react-spinners";
import Button from "./Button";



// bcz don't want to pass magic numbers
const initialActiveChallengeId = 1;

const ChallengeItem = ({ challenge, activeId, setActiveId }) => {
    const defaultStyledItem = (
        <div
            onClick={() => setActiveId(challenge.id)}
            className=" flex items-center gap-[10px] p-[10px] shadow-md cursor-pointer transition-all group hover:bg-gradient-to-r hover:from-accentBlue hover:to-accentGreen"
        >
            <span className=" text-[30px] font-bold text-accentBlue block p-[5px] group-hover:text-white ">
                {/* if the number is less than 10, start with 0 */}
                {challenge.id < 10 && "0"}
                {challenge.id}
            </span>
            <span className=" text-[18px] group-hover:text-white">
                {challenge.title}
            </span>
        </div>
    );

    const activeStyledItem = (
        <div
            onClick={() => setActiveId(challenge.id)}
            className=" flex items-center gap-[10px] p-[10px] shadow-md cursor-pointer transition-all  bg-gradient-to-r from-accentBlue to-accentGreen"
        >
            <span className=" text-[30px] font-bold text-white block p-[5px] ">
                {/* if the number is less than 10, start with 0 */}
                {challenge.id < 10 && "0"}
                {challenge.id}
            </span>
            <span className=" text-[18px] text-white">{challenge.title}</span>
        </div>
    );

    return (
        <div>
            {activeId === challenge.id ? activeStyledItem : defaultStyledItem}
        </div>
    );
};

const Challenges = ({ challenges, onMoreButtonClick, isLoading }) => {
    const [activeChallengeId, setActiveChallengeId] = useState(
        initialActiveChallengeId
    );

    return (
        <motion.div
            className=" container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className=" grid lg:grid-cols-2 gap-5 py-[100px]">
                <motion.div variants={imgVariants}>
                    <img
                        src="/assets/case-study-trip-pro-our-challenges@2x.png"
                        className=" mt-16"
                        alt="case-study-trip-pro-our-challenges@2x.png"
                    />
                </motion.div>
                <motion.div variants={txtVariants}>
                    <h2 className=" uppercase text-[36px] font-bold">
                        Our <span className=" text-accentBlue">challenges</span>
                    </h2>

                    {isLoading && (
                        <div className=" w-full h-8 grid place-items-center mb-8">
                            <PropagateLoader color="#2DC4EA" />
                        </div>
                    )}

                    <div className=" flex flex-col gap-[20px] mb-8 mt-4">
                        {challenges.length > 0 &&
                            challenges.map((challenge) => (
                                <ChallengeItem
                                    key={challenge.id}
                                    challenge={challenge}
                                    activeId={activeChallengeId}
                                    setActiveId={setActiveChallengeId}
                                />
                            ))}
                    </div>

                    <Button text="more" onButtonClick={onMoreButtonClick} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Challenges;
