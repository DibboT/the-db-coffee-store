import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <div className='m-20'>
      
      <h1 className='text-4xl text-purple-600 text-center my-10'>All Coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
          coffee={coffee}
        ></CoffeeCard>)
      }
      </div>
      
    </div>
  )
}

export default App;
