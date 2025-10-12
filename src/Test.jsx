import { motion } from "framer-motion";


export default function text() {
  return (
    <div
      className=" bg-amber-300 w-fit p-4 rounded-2xl">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >Testing Framer-motion</motion.h1>
      <motion.ul
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}

        className=" bg-green-500 rounded-2xl p-2">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </motion.ul>
    </div>
  )
}
