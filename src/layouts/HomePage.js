import React from 'react'
import ChatLayout from './common/ChatLayout'
import MainDashboard from './homePage/MainDashboard'
import LeftMenu from './common/LeftMenu'
import TopNavigation from './common/TopNavigation'

export default function 
Main() {
  return (
    <div>
        <TopNavigation />
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <LeftMenu />
          <MainDashboard />
          <ChatLayout />
        </div>
    </div>
  )
}
