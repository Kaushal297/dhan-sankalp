import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { Outlet, createRootRoute } from '@tanstack/react-router'


export const Route = createRootRoute({
    component: Root,
    notFoundComponent: () => {
        return <p>This is the notFoundComponent configured on root route</p>
    },
})

export default function Root() {
    return (
        <>
            <Header></Header>
            <div className='lc-content'>
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    )
}
