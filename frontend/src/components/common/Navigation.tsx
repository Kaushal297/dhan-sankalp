import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
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
                    <Link to={navTab.path} key={navTabIndex}>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>{navTab.tabName}</NavigationMenuLink>
                        </NavigationMenuItem>
                    </Link>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
