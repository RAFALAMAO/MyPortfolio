import BotSegImg from '../../public/images/projects/BotSeg.png';
import MoviesFlixImg from '../../public/images/projects/MoviesFlix.png';
import ORB_SLAM2Img from '../../public/images/projects/ORB_SLAM2.gif';
import ORB_SLAM3Img from '../../public/images/projects/ORB_SLAM3.gif';
import Orbslam3dImg from '../../public/images/projects/Orbslam3d.png';
import BbvaImg from '../../public/images/projects/bbva.png';
import FramerMotionAppImg from '../../public/images/projects/framerMotionApp.gif';
import GearVerseImg from '../../public/images/projects/gearVerse.png';
import HectorImg from '../../public/images/projects/hector.png';
import LendincImg from '../../public/images/projects/lendinc.png';
import MailServerImg from '../../public/images/projects/mailServer.png';
import RaymanImg from '../../public/images/projects/rayman.jpg';
import VitReactImg from '../../public/images/projects/vitReact.png';

export const PROJECTS = [
  {
    title: 'Tech Store',
    description:
      'Simple tech store, it was built with React + Vite and NestJs. This app is a platform that invites those interested in buy tech items like laptops, smartphones, etc. Has some search and filter features.',
    image: GearVerseImg,
    tags: ['React', 'NestJs', 'PostgreSQL'],
    source: 'https://github.com/RAFALAMAO/gear-verse-front.git',
    visit: 'https://gear-verse-front.vercel.app/'
  },
  {
    title: 'Email Server',
    description:
      'Simple email server, it was built with Poste.io docker image. The server can be used for sending and receiving emails through SMTP and IMAP protocols. The server is alocated in a Google Cloud VM.',
    image: MailServerImg,
    tags: ['Docker', 'GoDaddy™', 'Google', 'Poste.io'],
    source: null,
    visit: 'https://mail.kiky.pro'
  },
  {
    title: 'Rayman Game Port',
    description:
      'Due Rayman Jungle Run is a little old, I generated a port of this game to work with Android 13. The port was decompiled with Apktool and modified with smali. I wrote a XDA forum post about it.',
    image: RaymanImg,
    tags: ['Smali', 'Apktool', 'Android'],
    source: 'https://github.com/RAFALAMAO/Rayman-Jungle-Run-Port/tree/main',
    visit: 'https://xdaforums.com/t/rayman-jungle-fiesta-run-android-13-port-decompiled-apktool.4658702/'
  },
  {
    title: 'BBVA Fintech',
    description:
      'App made with ReactJs. It is a platform that invites those interested in technology to propose an article for BBVA in order to have the opportunity to be sponsored.',
    image: BbvaImg,
    tags: ['React', 'MySQL', 'Azure', 'Axios'],
    source: 'https://github.com/RAFALAMAO/bbva-fintech',
    visit: 'https://rafalamao.github.io/bbva-fintech'
  },
  {
    title: 'Lendinc',
    description:
      'Web page made with ReactJs and Express developed in *The Rocket Code, it has the objective of registering new customers to grant credit according to many business rules.',
    image: LendincImg,
    tags: ['React', 'Express', 'Credit Loans', 'MySQL'],
    source: null,
    visit: 'https://lendinc.mx'
  },
  {
    title: 'Movie Flix',
    description:
      "App made with ReactJs. It's just a simple consumption of an API to get and show movie information, also a virtual assitant that sends you movie information in real time.",
    image: MoviesFlixImg,
    tags: ['React', 'Bot', 'Hooks', 'Fetch'],
    source: 'https://github.com/RAFALAMAO/react-movie-flix',
    visit: 'https://rafalamao.github.io/react-movie-flix/'
  },
  {
    title: '3D Map Plotter',
    description:
      'Web page made with ReactJs that has the objective of graphing a 3D point cloud hosted in a GitHub repository, data was generated with ORBSLAM2.',
    image: Orbslam3dImg,
    tags: ['React', 'Plotly', 'Axios', 'FramerM', 'StyledC'],
    source: 'https://github.com/RAFALAMAO/react-slam-page/tree/master',
    visit: 'https://rafalamao.github.io/react-slam-page/'
  },
  {
    title: 'VitReact College',
    description: `In this web application you can login as a Student or Teacher and CRUD information.
    This project has its own REST API Back-End developed with NodeJs, Express and MySLQ.`,
    image: VitReactImg,
    tags: ['Vite', 'React', 'Hooks', 'Back-End'],
    source: 'https://github.com/RAFALAMAO/front-end-colegio/tree/master',
    visit: 'https://rafalamao.github.io/front-end-colegio/'
  },
  {
    title: 'Framer Motion SVG',
    description:
      'Simple app using Framer Motion to animate SVG content and simple use of React routers. Warning: it can be a lot of work for your mobile or PC, just a joke... or not?.',
    image: FramerMotionAppImg,
    tags: ['React', 'FramerM', 'StyledC'],
    source: 'https://github.com/RAFALAMAO/framer-motion-app',
    visit: 'https://rafalamao.github.io/framer-motion-app/',
    gif: true
  },
  {
    title: 'Virtual Assistant',
    description:
      'Develop of a virtual assistant inside of Intevolution, this bot helps manage the students and teachers process, using pure Javascript and Azure services.',
    image: BotSegImg,
    tags: ['JavaScript', 'Azure'],
    source: null,
    visit: 'https://www.seg.guanajuato.gob.mx/SitePages/Home.aspx'
  },
  {
    title: 'Hector Quadrotor Port',
    description:
      'Due hector quadrotor (drone simulator) only works on ROS melodic version, I generated a port to work with ROS Noetic.',
    image: HectorImg,
    tags: ['ROS', 'C++'],
    source: 'https://github.com/RAFALAMAO/hector-quadrotor-noetic',
    visit: null
  },
  {
    title: 'ORBSLAM2 Ubuntu 20 Port',
    description:
      'Due ORBSLAM2 is a little old, I generated a port of this algorithms to work with Ubuntu 20 and ROS Noetic.',
    image: ORB_SLAM2Img,
    tags: ['ROS', 'C++'],
    source: 'https://github.com/RAFALAMAO/ORB_SLAM2_NOETIC',
    visit: null,
    gif: true
  },
  {
    title: 'ORBSLAM3 Ubuntu 20 Port',
    description:
      'Due ORBSLAM3 is a little old, I generated a port of this algorithms to work with Ubuntu 20 and ROS Noetic.',
    image: ORB_SLAM3Img,
    tags: ['ROS', 'C++'],
    source: 'https://github.com/RAFALAMAO/ORB_SLAM3_NOETIC',
    visit: null,
    gif: true
  }
];

export const TIME_LINE_DATA = [
  {
    year: 2022,
    text: 'Article published in Pädi Boletín Científico de Ciencias Básicas e Ingenierías del ICBI 2022'
  },
  {
    year: 2022,
    text: 'Participation in the CIRC (Congreso Internacional de Robótica y Computación ) 2022'
  },
  {
    year: 2021,
    text: 'Solutions for TMR (Torneo Mexicano de Robotica) 2021 tests'
  },
  { year: 2021, text: 'Ported ORBSLAM and Hector Quadrotor' }
];

export const ACOMPLISHMENTS_DATA = [
  { year: 2024, time: 'Present', company: 'Tecnológico de Monterrey', position: 'Full Stack developer' },
  { year: 2023, time: 'Selected', company: 'BBVA', position: 'Developer intern' },
  { year: 2022, time: '2 yrs 6 mos', company: 'The Rocket Code', position: 'Full Stack developer' },
  { year: 2020, time: '1 yr', company: 'Intevolution', position: 'Software developer intern' }
];
