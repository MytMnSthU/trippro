import { motion } from "framer-motion";
import { txtVariants, imgVariants } from "../variables";
import Button from "./Button";

const About = () => {
    return (
        <motion.div
            className=" container py-[100px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className=" grid lg:grid-cols-2 gap-5">
                <motion.div
                    className=" flex flex-col justify-center items-start ps-10"
                    variants={txtVariants}
                >
                    <h2 className=" uppercase text-[36px] font-bold py-2 relative">
                        about <span className=" text-accentBlue">trippro</span>
                        <span className=" w-36 h-[2px] block bg-accentBlue absolute left-0 bottom-0"></span>
                    </h2>
                    <p className=" text-[14px] my-5 text-zinc-700">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy
                    </p>
                    <Button text="TOUR TO WEBSITE" />
                </motion.div>
                <div className=" grid justify-center">
                    <motion.img
                        src="/assets/Tablet@2x.png"
                        className=" w-[320px]"
                        alt="Tablet@2x.png"
                        variants={imgVariants}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
