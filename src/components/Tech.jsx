import { motion } from 'framer-motion';
import { styles } from '../styles';

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const largersize=['Oracle','mySQL'];

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skill & Expertise</p>
        <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>
      <motion.div className='flex flex-col items-center h-auto w-full ' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <ul className='flex flex-wrap items-center justify-center w-full lg:gap-x-10 gap-x-5 gap-y-7 pt-5'>
            {
              technologies.map((technology)=>{
                return (<>
                  <li className='lg:w-28 lg:h-28 w-24 h-24 flex-shrink-0 flex justify-center items-center group relative overflow-hidden rounded-xl' >
                  <div className='group-hover:bg-black/60 w-full h-full absolute z-30 transition-all duration-300' />
                  <img src={technology.icon} alt='' className={largersize.includes(technology.name)?'group-hover:scale-125 group-hover:skew-x-6 transition-all duration-500 w-[100%] h-[60%] object-cover':'group-hover:scale-125 group-hover:skew-x-6 transition-all duration-500 w-[80%] h-[80%] object-cover'} />
                  <div className='absolute -bottom-full group-hover:bottom-2 transition-all duration-500 z-50'>
                      <span className='text-xl text-white'>{technology.name}</span>
                  </div>
                </li>
                </>)
              })
            }
        </ul>
      </motion.div>
    </>

  );
};

export default SectionWrapper(Tech, "");
