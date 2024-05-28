import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navTabs = [
    {
        tabName: 'Home',

    },
    {
        tabName: 'Ledger',

    },
    {
        tabName: 'Accounts',

    },
    {
        tabName: 'Finance',

    },
    
]
export const Navigation = () => {
    return (

        <NavigationMenu>
            <NavigationMenuList>
                {navTabs.map(navTab => (
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{navTab.tabName}</NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>

    )
}

/**
 * <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
 * 
 * */ 
