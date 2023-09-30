import './App.css'
import { CardOne } from './component/CardOne'

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-2 rounded-xl bold mb-4'>Reusable Component</h1>
      <div className='flex gap-2'>
        <CardOne username="iLma"/>   
        <CardOne username="Padma"/>   
      </div>
    </>
  )
}

export default App
