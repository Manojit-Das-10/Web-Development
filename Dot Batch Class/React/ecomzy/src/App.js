import React from 'react'


const App = () => {
  return (
    <div>
       
       <div>
        <Navbar/>
       </div>

      <Routes>

        <Route path="/" element={<Home/>} />

      </Routes>

    </div>
  )
}

export default App