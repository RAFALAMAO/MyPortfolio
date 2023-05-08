import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { motion } from 'framer-motion';


export const Layout = ({children}) => {
  return (
    <Container>
      <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, z:1 }}
          transition={{ duration: 0.6 }}
        >
        <Header/>
      </motion.div>
      <main>{children}</main>
      <Footer/>
    </Container>
  )
}
