import { motion } from 'framer-motion';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimationCloud from '../components/BackgrooundAnimation/BackgroundAnimationCloud';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ScrollButton from '../styles/GlobalComponents/ScrollButton';

const Home = () => {
  return (
    <>
      <Layout>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Section grid hero>
            <Hero
              handleClick={() => {
                window.open('./documents/Aarón_Juárez_CV.pdf', '_blank');
              }}
            />
            <BgAnimationCloud />
          </Section>
        </motion.div>

        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
      <ScrollButton />
    </>
  );
};

export default Home;
