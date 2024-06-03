import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"

const navTabs = [
    {
        tabName: 'Home',
        path: '/',
    },
    {
        tabName: 'Ledger',
        path: '/ledger',
    },
    {
        tabName: 'Accounts',
        path: '/accounts',
    },
    {
        tabName: 'Finance',
        path: '/finance',
    },

]
export const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navTabs.map((navTab, navTabIndex) => (
                    <NavigationMenuItem key={navTabIndex}>
                        <Link to={navTab.path} className={navigationMenuTriggerStyle()}>
                            {navTab.tabName}
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
