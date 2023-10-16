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
	const PLAY = 'play', STOP = 'stop', NEXT = 'next'
	const [lastClicked, setLastClicked] = useState(PLAY)

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
					initial={lastClicked === PLAY ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === PLAY ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked(PLAY)}
					> Play/pause
				</motion.button>
				<motion.button
					initial={lastClicked === STOP ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === STOP ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked(STOP)}
					> Stop
				</motion.button>
				<motion.button
					initial={lastClicked === NEXT ? buttonInitialSelected : buttonInitial}
					whileHover={lastClicked === NEXT ? buttonHoverSelected : buttonHover}
					transition={buttonTransition}
					onClick={() => setLastClicked(NEXT)}
					> Next
				</motion.button>
			</div>
		</main>
	)
}
/* Vad kan förbättras i koden?
+ använda konstanter i stället för "magic strings" för 'play' osv.
+ om vi kan se elementen som en lista med buttons - använd array och map() för att skapa dem
	{ buttonText, selectedString, 4 objekt för initial och hover }
+ en higher order component för motion.button, eftersom de har så mycket gemensamt
const Higher = comp => (
	<div>
		{comp}
	</div>
)
*/

export default App
