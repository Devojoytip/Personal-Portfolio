import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const docs = [
    {
        // "https://drive.google.com/file/d/1X75cCJo_SiQp6parB-SYYd_piV7vc00p/view?usp=sharing"
        uri: "../src/assets/Resume.pdf",  // Local File
        fileType: "pdf"
    }
];

const Resume = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>My Resume</h2>
                <p>Below is my CV for reference</p>
            </motion.div>
            
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                
                <DocViewer
                    documents={docs}
                    initialActiveDocument={docs[1]}
                    pluginRenderers={DocViewerRenderers}
                    style={{ width: "100%", height: "100vh" }}
                />
            </motion.p>

        </>
    );
};

export default SectionWrapper(Resume, "resume");