import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ScrollButton from '../styles/GlobalComponents/ScrollButton';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Layout>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Section grid hero>
            <Hero/>
            <BgAnimation/>
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
