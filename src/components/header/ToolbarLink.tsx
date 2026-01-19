"use client"

import Link from "next/link"
import { Tab } from "./toolbar"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

export default function ToolbarLink({ tab }: { tab: Tab }) {

    const pathname = usePathname()
    const isActive = pathname === tab.href

    return (
        <Link href={tab.href}>
            <Button variant={isActive ? 'default' : 'ghost'} size={'sm'}>
                {tab.icon}
                {tab.label}
            </Button>
        </Link>
    )
}