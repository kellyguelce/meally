import { ChefHat, LayoutDashboard } from 'lucide-react'
import ToolbarLink from './ToolbarLink'

export interface Tab {
    label: string
    href: string
    icon: React.ReactNode
}

export default function Toolbar() {

    const tabs: Tab[] = [
        {
            label: "Overview",
            href: "/",
            icon: <LayoutDashboard />
        },
        {
            label: "Receipes",
            href: "/receipes",
            icon: <ChefHat />
        },
    ]


    return (
        <div className="flex items-center justify-between px-6 py-2 border-y">
            <ul className='flex space-x-2'>
                {tabs.map((tab, index) => (
                    <li key={'tab-' + index}>
                        <ToolbarLink tab={tab} />
                    </li>
                ))}
            </ul>
        </div>
    )
}