import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion'

const buttonInitial = {
	transform: 'scale(1)',
	backgroundColor: 'rgb(248, 103, 175)'
}
const buttonHover = {
	transform: 'scale(1.2)',
	boxShadow: '-0.3em 0.3em 0.4em #414141',
	backgroundColor: 'rgb(63, 129, 234)'
}
const buttonTransition = { duration: 1.2 }

function App() {
	// Möjliga värden på lastClicked: 'play', ' stop', 'next'
	const [lastClicked, setLastClicked] = useState('play')

	const buttonInitialSelected = {
		...buttonInitial,
		backgroundColor: 'rgb(207, 145, 176)'
	}
	const buttonHoverSelected = {
		...buttonHover,
		backgroundColor: 'rgb(125, 163, 224)'
	}

	return (
		<main>
			<h1> Motion demo </h1>
			<div className="media-controller">
				<motion.button
					initial={lastClicked === 'play' ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === 'play' ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked('play')}
					> Play/pause
				</motion.button>
				<motion.button
					initial={lastClicked === 'stop' ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === 'stop' ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked('stop')}
					> Stop
				</motion.button>
				<motion.button
					initial={lastClicked === 'next' ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === 'next' ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked('next')}
					> Next
				</motion.button>
			</div>
		</main>
	)
}

export default App
