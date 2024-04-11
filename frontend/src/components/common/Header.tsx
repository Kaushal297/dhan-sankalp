import React from 'react'
import { ModeToggle } from '../mode-toggle'
import AvatarComponent from './AvatarComponent'

function Header() {
	return (
		<div>Header

			<ModeToggle />

			<AvatarComponent />
		</div>
	)
}

export default Header