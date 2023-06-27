import { motion } from 'framer-motion';

import { styles } from '../styles';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skill & Expertise</p>
        <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}className='mt-4 text-secondary text-center max-w-6xl leading-[30px]'>
        And I can used other technologies like Redis & RabbitMQ. In University, I have used programming languages ​​C++, Java, Python.
      </motion.p>
    </>

  );
};

export default SectionWrapper(Tech, "");
