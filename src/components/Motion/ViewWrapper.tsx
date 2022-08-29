import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function ViewWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}

export default ViewWrapper
