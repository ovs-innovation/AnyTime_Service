import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-secondary flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white font-heading font-black text-2xl">A</span>
        </motion.div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
