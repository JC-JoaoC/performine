'use client';

import {
  ClipboardType,
  LayoutDashboard,
  LogOut,
  MapPinned
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Mapa',
    url: '/mapa',
    icon: MapPinned
  },
  {
    title: 'Equipamentos',
    url: '/equipamentos',
    icon: ClipboardType
  }
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="pl-4 border-b">
        <Image src="/logo.svg" alt="Performine" width={200} height={50} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <Avatar>
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">Nome da pessoa</p>
                    <p className="text-sm text-muted-foreground">
                      Matricula da Pessoa
                    </p>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <LogOut />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
