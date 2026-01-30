import { useEffect, useState } from "react"



const Card = ({title}) => {
  const [ hasLiked, setHasLiked ] = useState(false)
  const [count, setCount] = useState(0)


  // moutes in 2 time devlopment two times
  useEffect(()=> {
    console.log(`${title} has been liked: ${hasLiked}`);
    
  }, [hasLiked])


  useEffect(() => {
    console.log("Card Mounted");
    
  } , [])


  return(
    // <div onClick={(prevState) => setCount(prevState+1)}>
    <div onClick={() => setCount(count+1)}>
      {/* conditional rendering */}
      <h2>{title} : { count || null }</h2>

      <button onClick={() => setHasLiked(!hasLiked)} className="text-neutral-200 bg-black py-2 px-4">
        {hasLiked ? "🩷" : '🩵'}
      </button>
    </div>
  )
}

function App() {



  return (
  <main>
      <h2>Hello</h2>

      <Card title="hello"/>
      <Card title="marverl"/>

  </main>
  )
}

export default App
