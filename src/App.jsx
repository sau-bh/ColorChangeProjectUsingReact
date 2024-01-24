import { useState } from 'react'

const App = () => {
    const [color , setColor] = useState("black")
   
  return (
    
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>

        <div className='fixed-center flex flex-wrap justify-content bottom-12 inset-x-0 px-2'>
            <div className='flex-c flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button onClick={()=>setColor('red')} className='outline-none px-4' style={{backgroundColor:'red'}}>Red</button>
                <button  onClick={()=>setColor('white')} className='outline-none px-4' style={{backgroundColor:'white'}}>White</button>
                <button  onClick={()=>setColor('green')} className='outline-none px-4' style={{backgroundColor:'green'}}>Green</button>
                <button  onClick={()=>setColor('olive')} className='outline-none px-4' style={{backgroundColor:'olive'}}>Olive</button>
                <button  onClick={()=>setColor('pink')} className='outline-none px-4' style={{backgroundColor:'pink'}}>Pink</button>
                <button  onClick={()=>setColor('blue')} className='outline-none px-4' style={{backgroundColor:'blue'}}>Blue</button>

            </div>
        </div>



    </div>
    
  )
}

export default App
