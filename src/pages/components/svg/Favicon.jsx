import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg
			width={500}
			height={500}
			viewBox='0 0 500 500'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8 5a3 3 0 00-3 3V495h144.887a3 3 0 003-3v-42.114a3 3 0 00-3-3H76.028a3 3 0 01-3-3V56.114a3 3 0 013-3h73.859a3 3 0 003-3V8a3 3 0 00-3-3H8zm304.606 3v42.114a3 3 0 003 3h4.414c17.053 0 49.677 3.165 53.384 34.186v94.961c-.247 8.019 1.928 27.855 12.604 43.049 3.247 4.806 11.955 15.083 23.234 21.985 2.049 1.253 2.164 4.355.141 5.652-9.452 6.061-22.326 15.767-23.314 22.239-.077.502-.19.999-.426 1.448-4.304 8.175-12.239 29.863-12.239 56.932v78.501c.247 11.184-9.787 33.806-51.901 34.819h-5.897a3 3 0 00-3 3V492a3 3 0 003 3h11.828c8.898-.211 30.548-1.519 45.97-5.065 16.311-3.587 51.159-17.219 60.056-43.049 2.225-4.642 6.97-18.106 8.156-34.819v-98.469c0-.193.017-.379.056-.568 1.83-8.932 9.824-27.927 27.792-35.047.145-.057.286-.127.426-.197l.205-.1c1.713-.807 7.895-2.028 21.816-1.801 1.691.028 3.089-1.327 3.089-3.019v-44.447c0-1.699-1.407-3.058-3.105-3.049-6.649.036-17.059-.438-22.104-2.592-7.384-2.102-23.298-12.198-28.115-35.792a2.924 2.924 0 01-.06-.59V87.3c-.484-8.478-2.867-26.844-8.543-33.774a3.479 3.479 0 01-.552-.91c-5.233-12.84-23.988-38.552-59.117-42.551-6.426-1.267-22.688-4.052-36.331-5.065h-21.467a3 3 0 00-3 3z'
				fill='#EA5455'
			/>
			<path
				d='M73.028 495v2.5h1.036l.732-.732L73.028 495zm0 0v-2.5h-1.035l-.733.732L73.028 495zM373.404 87.3h2.5v-.15l-.018-.147-2.482.297zm0 94.961l2.499.077.001-.039v-.038h-2.5zm12.604 43.049l2.072-1.4-.013-.019-.013-.018-2.046 1.437zm23.234 21.985l1.305-2.133-1.305 2.133zm.141 5.652l1.35 2.104-1.35-2.104zm-23.314 22.239l2.471.377-2.471-.377zm-.426 1.448l2.212 1.165-2.212-1.165zm-12.239 135.433h-2.5v.055l2.5-.055zm-51.901 34.819v2.5h.06l-.06-2.5zM327.434 495v2.5h.03l.03-.001-.06-2.499zm45.97-5.065l-.537-2.441-.012.002-.011.003.56 2.436zm60.056-43.049l-2.254-1.08-.062.13-.047.136 2.363.814zm8.156-34.819l2.494.177.006-.088v-.089h-2.5zm.056-99.037l-2.449-.502v.001l2.449.501zm27.792-35.047l-.92-2.324.92 2.324zm.426-.197l-1.111-2.239 1.111 2.239zm.205-.1l1.066 2.262-1.066-2.262zm21.816-1.801l-.041 2.5.041-2.5zm-.016-50.515l.013 2.5-.013-2.5zm-22.104-2.592l.982-2.299-.146-.062-.152-.044-.684 2.405zm-28.115-35.792l-2.45.501 2.45-.501zm-.06-99.686h2.5v-.072l-.004-.07-2.496.142zm-8.543-33.774l1.934-1.585-1.934 1.585zm-.552-.91l-2.316.944h.001l2.315-.944zm-59.117-42.551l-.484 2.452.1.02.101.012.283-2.484zM337.073 5l.185-2.493-.092-.007h-.093V5zM7.5 8a.5.5 0 01.5-.5v-5A5.5 5.5 0 002.5 8h5zm0 45.114V8h-5v45.114h5zm0 393.772V53.114h-5v393.772h5zM7.5 495v-48.114h-5V495h5zM5 492.5a2.5 2.5 0 012.5 2.5h-5a2.5 2.5 0 002.5 2.5v-5zm68.028 0H5v5h68.028v-5zm-1.768.732l3.536 3.536v-.001l-3.536-3.535zm78.627-.732H73.028v5h76.859v-5zm.5-.5a.5.5 0 01-.5.5v5a5.5 5.5 0 005.5-5.5h-5zm0-42.114V492h5v-42.114h-5zm-.5-.5a.5.5 0 01.5.5h5a5.5 5.5 0 00-5.5-5.5v5zm-73.859 0h73.859v-5H76.028v5zm-5.5-5.5a5.5 5.5 0 005.5 5.5v-5a.5.5 0 01-.5-.5h-5zm0-387.772v387.772h5V56.114h-5zm5.5-5.5a5.5 5.5 0 00-5.5 5.5h5a.5.5 0 01.5-.5v-5zm73.859 0H76.028v5h73.859v-5zm.5-.5a.5.5 0 01-.5.5v5a5.5 5.5 0 005.5-5.5h-5zm0-42.114v42.114h5V8h-5zm-.5-.5a.5.5 0 01.5.5h5a5.5 5.5 0 00-5.5-5.5v5zm-76.859 0h76.859v-5H73.028v5zM8 7.5h65.028v-5H8v5zm307.106 42.614V8h-5v42.114h5zm.5.5a.5.5 0 01-.5-.5h-5a5.5 5.5 0 005.5 5.5v-5zm4.414 0h-4.414v5h4.414v-5zm55.866 36.39c-1.981-16.576-11.792-25.78-23.174-30.723-11.234-4.879-24.074-5.667-32.692-5.667v5c8.436 0 20.433.794 30.701 5.253 10.12 4.395 18.474 12.284 20.2 26.73l4.965-.594zm.018 95.257V87.3h-5v94.961h5zm12.15 41.612c-10.256-14.595-12.389-33.827-12.151-41.535l-4.998-.154c-.257 8.33 1.96 28.77 13.058 44.563l4.091-2.874zm22.493 21.289c-10.899-6.669-19.364-16.659-22.467-21.252l-4.143 2.8c3.391 5.019 12.341 15.583 24 22.717l2.61-4.265zm.186 9.889c3.674-2.355 3.335-7.734-.186-9.889l-2.61 4.265c.229.14.393.409.403.751.01.334-.127.55-.306.664l2.699 4.209zm-22.193 20.512c.151-.985.828-2.395 2.231-4.193 1.363-1.748 3.237-3.643 5.435-5.584 4.393-3.877 9.858-7.741 14.527-10.735l-2.699-4.209c-4.784 3.068-10.482 7.087-15.136 11.196-2.326 2.053-4.446 4.176-6.07 6.257-1.585 2.032-2.887 4.262-3.23 6.513l4.942.755zm-.685 2.236c.43-.818.594-1.641.685-2.236l-4.942-.755c-.063.409-.125.581-.168.662l4.425 2.329zm-11.951 55.767c0-26.633 7.822-47.924 11.951-55.767l-4.425-2.329c-4.478 8.506-12.526 30.592-12.526 58.096h5zm0 78.501v-78.501h-5v78.501h5zm-54.341 37.319c21.499-.518 35.178-6.566 43.476-14.262 8.27-7.67 11.003-16.81 10.864-23.112l-4.999.11c.108 4.883-2.052 12.646-9.265 19.336-7.186 6.664-19.581 12.433-40.196 12.929l.12 4.999zm-5.957 0h5.897v-5h-5.897v5zm-.5.5a.5.5 0 01.5-.5v-5a5.5 5.5 0 00-5.5 5.5h5zm0 42.114v-42.114h-5V492h5zm.5.5a.5.5 0 01-.5-.5h-5a5.5 5.5 0 005.5 5.5v-5zm11.828 0h-11.828v5h11.828v-5zm45.41-5.001c-15.172 3.488-36.621 4.792-45.469 5.002l.119 4.998c8.947-.212 30.798-1.524 46.47-5.127l-1.12-4.873zm58.253-41.427c-4.171 12.109-14.527 21.582-26.166 28.533-11.601 6.929-24.133 11.144-32.064 12.889l1.074 4.883c8.38-1.843 21.428-6.237 33.553-13.479 12.087-7.219 23.604-17.477 28.33-31.197l-4.727-1.629zm8.026-34.182c-1.164 16.392-5.825 29.55-7.917 33.916l4.509 2.161c2.357-4.919 7.186-18.689 8.395-35.723l-4.987-.354zm-.007-98.292v98.469h5v-98.469h-5zm.107-1.069a5.293 5.293 0 00-.107 1.069h5c0-.024.001-.039.002-.047l.003-.019-4.898-1.003zm29.321-36.87c-9.588 3.799-16.444 10.738-21.112 17.788-4.66 7.036-7.233 14.32-8.209 19.081l4.898 1.004c.855-4.17 3.193-10.851 7.48-17.325 4.278-6.461 10.404-12.579 18.784-15.9l-1.841-4.648zm.235-.112a4.282 4.282 0 01-.235.112l1.841 4.648c.258-.102.491-.219.616-.281l-2.222-4.479zm.25-.122c-.095.045-.185.09-.25.122l2.222 4.479a8.37 8.37 0 01.16-.078l-2.132-4.523zm22.923-2.04c-7.034-.115-12.167.135-15.796.527-3.534.381-5.867.919-7.128 1.513l2.133 4.523c.452-.214 2.066-.691 5.532-1.065 3.371-.364 8.289-.611 15.177-.498l.082-5zm.548-.519a.53.53 0 01-.548.519l-.082 5c3.066.05 5.63-2.408 5.63-5.519h-5zm0-44.447v44.447h5v-44.447h-5zm-.592-.549a.573.573 0 01.592.549h5c0-3.127-2.577-5.565-5.619-5.549l.027 5zm-23.099-2.793c2.906 1.24 7.104 1.921 11.198 2.307 4.17.394 8.522.504 11.901.486l-.027-5c-3.268.018-7.446-.09-11.404-.464-4.035-.38-7.564-1.014-9.704-1.927l-1.964 4.598zm-29.583-37.59c5.018 24.573 21.665 35.357 29.881 37.695l1.368-4.809c-6.551-1.864-21.732-11.273-26.35-33.887l-4.899 1.001zm-.11-1.091c0 .363.037.73.11 1.091l4.899-1.001a.48.48 0 01-.009-.09h-5zm0-99.096v99.096h5V87.3h-5zm-7.977-32.19c1.162 1.419 2.259 3.567 3.246 6.279.976 2.682 1.792 5.77 2.46 8.956 1.336 6.375 2.039 12.96 2.275 17.097l4.992-.285c-.248-4.34-.978-11.177-2.374-17.838-.698-3.331-1.572-6.664-2.654-9.64-1.072-2.945-2.401-5.692-4.077-7.738l-3.868 3.169zm-.933-1.55c.247.607.575 1.114.933 1.55l3.868-3.169a1.028 1.028 0 01-.171-.268l-4.63 1.887zm-57.085-41.011c33.964 3.866 52.087 28.746 57.084 41.01l4.631-1.886c-5.467-13.416-24.854-39.96-61.149-44.092l-.566 4.968zm-36.233-5.056c13.502 1.003 29.655 3.768 36.032 5.024l.967-4.905c-6.474-1.276-22.845-4.082-36.629-5.105l-.37 4.986zm-21.282.007h21.467v-5h-21.467v5zm-.5.5a.5.5 0 01.5-.5v-5a5.5 5.5 0 00-5.5 5.5h5z'
				fill='#D6333E'
			/>
		</svg>
	)
}

export default SvgComponent