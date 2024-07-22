'use client';

import React, { useState, useEffect } from 'react'
import {
    ArchiveX,
    ChevronRight,
    File,
    Inbox,
    Send,
  } from "lucide-react"

import {
    useWindowWidth,
  } from '@react-hook/window-size'
import { Nav } from './ui/nav'
import { Button } from './ui/button';

type Props = {}

export default function SideNavbar({}:Props){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  function toggleSidebar(){
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar} 
            variant={'secondary'}
            className="rounded full p-2">
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav 
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Inbox",
            label: "",
            icon: Inbox,
            variant: "default",
            href:"/Inbox"
          },
          {
            title: "Drafts",
            label: "",
            icon: File,
            variant: "ghost",
            href:"/Drafts"
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
            href:"/Sent"
          },
          {
            title: "Junk",
            label: "",
            icon: ArchiveX,
            variant: "ghost",
            href:"/Junk"
          },
        ]}
      />
    </div>
  )
}
