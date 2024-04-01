import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}} onClick={()=> setColor("Olive")}>Olive</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Gray"}} onClick={()=> setColor("Gray")}>Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Yellow"}} onClick={()=> setColor("Yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}} onClick={()=> setColor("Pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}} onClick={()=> setColor("Purple")}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Lavender"}} onClick={()=> setColor("Lavender")}>Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"White"}} onClick={()=> setColor("White")}>White</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} onClick={()=> setColor("Black")}>Black</button>

       
          </div>
        </div>
      </div>
    </>
  )
}

export default App
