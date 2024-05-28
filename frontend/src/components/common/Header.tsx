import { ModeToggle } from '../mode-toggle'
import AvatarComponent from './AvatarComponent'
import { Navigation } from './Navigation'

function Header() {
	return (
		<div className='lc-header'>

			<div className='lch-logo'>Dhan Sankalp</div>

			<Navigation />
			<div className='lch-avatars'>
				<ModeToggle />

				<AvatarComponent />
			</div>

		</div>
	)
}

export default Header