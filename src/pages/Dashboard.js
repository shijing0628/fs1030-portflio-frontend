import React from 'react'
import DashboardTable from '../components/DashboardTable/DashboardTable'
import ParticlesBg from 'particles-bg'
function Dashboard() {
 return (
  <div>
   <ParticlesBg type="circle" bg={true} id="particles-js" color="#E3D0FF" />
   <DashboardTable />
  </div>
 )
}

export default Dashboard
