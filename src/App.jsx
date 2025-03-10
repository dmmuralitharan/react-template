function App() {
  return (
    <>
   <h1 className='text-2xl'>Hello, Team</h1>
   <button onClick={() => {
    console.log(import.meta.env);
    
   }}>Click</button>
   </>
  )
}

export default App
