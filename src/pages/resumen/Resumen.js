import React from 'react'

import './resumen.css'
import Send from '../components/svg/Send'

import { Cv } from './components/Cv'

const Resumen = () => {
	return (
		<section className='resumen'>
			<h2 className='title'>
				<span>{'['}</span> Resumen <span>{'}'}</span>
			</h2>

			<p className='section-description'>
				Me alegra que estes por aca, aqui podras ver mi resumen online,
				trabajos, educación, habilidades. Si gustas cuentas con la opcion de
				descargarlo.
			</p>

			<a
				href='https://drive.google.com/file/d/1mDDND0YB5N52wDl7H1Fg9hrmjqqh_AUg/view?usp=sharing'
				target='_blank'
				rel='noreferrer'
				className='button button-primary button-pdf'
			>
				<Send /> Descargar version PDF
			</a>

			<Cv />
		</section>
	)
}

export default Resumen
