"use client"

import * as React from "react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { RiDashboardLine, RiListUnordered, RiBarChartLine, RiFolderLine, RiGroupLine, RiCameraLine, RiFileTextLine, RiSettingsLine, RiQuestionLine, RiSearchLine, RiDatabase2Line, RiFileChartLine, RiFileLine, RiCommandLine } from "@remixicon/react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
 
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: <RiDashboardLine />,
    },
    {
      title: "Jogadores",
      url: "#",
      icon: <RiGroupLine />,
    },
    {
      title: "Convocações",
      url: "#",
      icon: <RiListUnordered />,
    },
    {
      title: "Estatísticas",
      url: "#",
      icon: <RiBarChartLine />,
    },
    {
      title: "Competições",
      url: "#",
      icon: <RiFolderLine />,
    },
  ],

  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: <RiSettingsLine />,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: <RiQuestionLine />,
    },
    {
      title: "Pesquisar",
      url: "#",
      icon: <RiSearchLine />,
    },
  ],

  documents: [
    {
      name: "Elenco Atual",
      url: "#",
      icon: <RiDatabase2Line />,
    },
    {
      name: "Relatórios",
      url: "#",
      icon: <RiFileChartLine />,
    },
    {
      name: "Histórico da Seleção",
      url: "#",
      icon: <RiFileLine />,
    },
  ],
}