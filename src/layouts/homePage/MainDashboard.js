import React from 'react'
import MainDashboardLeft from './mainDashboard/MainDashboardLeft'
import MainDashboardRight from './mainDashboard/MainDashboardRight'

export default function Dashboard() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <MainDashboardLeft />
      <MainDashboardRight />
    </div>
  )
}
