import React from 'react'
import { ModeToggle } from '../mode-toggle'
import AvatarComponent from './AvatarComponent'

function Header() {
	return (
		<div className='lc-header'>

			<div className='lch-logo'>Dhan Sankalp</div>

			<div className='lch-avatars'>
				<ModeToggle />

				<AvatarComponent />
			</div>

		</div>
	)
}

export default Header