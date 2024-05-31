import { TanStackRouterDevtools } from "@tanstack/router-devtools"

function Footer() {
	return (
		<div className="lc-footer">
			Footer
			{/* TODO: we don't want this to be rendered in prod */}
			<TanStackRouterDevtools position='bottom-right' />
		</div>
	)
}

export default Footer