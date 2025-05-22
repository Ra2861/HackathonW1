"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { BarChart3, Building2, Home, LayoutDashboard, Settings, Users } from "lucide-react"

interface NavProps {
  isCollapsed: boolean
}

export function DashboardNav({ isCollapsed }: NavProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      title: "Dashboard",
    },
    {
      href: "/dashboard/holdings",
      icon: Building2,
      title: "Holdings",
    },
    {
      href: "/dashboard/empresas",
      icon: Users,
      title: "Empresas",
    },
    {
      href: "/dashboard/imoveis",
      icon: Home,
      title: "Imóveis",
    },
    {
      href: "/dashboard/relatorios",
      icon: BarChart3,
      title: "Relatórios",
    },
    {
      href: "/dashboard/configuracoes",
      icon: Settings,
      title: "Configurações",
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === route.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start",
            isCollapsed && "h-9 w-9 p-0 justify-center",
          )}
        >
          <route.icon className={cn("h-4 w-4", isCollapsed ? "mr-0" : "mr-2")} />
          {!isCollapsed && <span>{route.title}</span>}
        </Link>
      ))}
    </nav>
  )
}
