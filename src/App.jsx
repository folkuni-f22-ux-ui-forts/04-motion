// import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion'

const buttonInitial = { transform: 'scale(1)' }
const buttonHover = {
	transform: 'scale(1.2)',
	boxShadow: '-0.3em 0.3em 0.4em #414141'
}

function App() {
	// const [count, setCount] = useState(0)


	return (
		<main>
			<h1> Motion demo </h1>
			<div className="media-controller">
				<motion.button
					initial={buttonInitial}
					whileHover={buttonHover}
					> Play/pause
				</motion.button>
				<motion.button
					initial={buttonInitial}
					whileHover={buttonHover}
					> Stop
				</motion.button>
			</div>
		</main>
	)
}

export default App
