import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <div className='min-w-screen min-h-screen content-center justify-items-center'>
    <div className='justify-items-center w-3/5'>
        <h1 className='font-bold text-4xl'>wellcome to the india best hospital</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum officia saepe iusto excepturi. Aliquid, officiis totam asperiores exercitationem et magni reiciendis, repellat a ipsum fugit rem. Numquam aspernatur molestias explicabo impedit. Veritatis nobis quia aliquam nulla tenetur saepe ut magni, illo culpa voluptates quo accusantium molestias minima veniam suscipit commodi.</p>
         
      <Link to='/Appintement'><button className=' m-5 p-3 bg-blue-500 rounded '>Appointment</button></Link>
    </div>
   </div>
   </>
  )
}

export default Home
