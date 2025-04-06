import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DogsList({dogs, getDogs, setCurrentDog}) {
  const navigate = useNavigate()
  
  const editDog = id => {
    setCurrentDog(id)
    navigate('form')
  }
  const deleteDog = id => {
    fetch(`/api/dogs/${id}`, { method: 'DELETE'})
      .then(res => {
        if(!res.ok) throw new Error('problem DELETing dog')
          getDogs()
        setCurrentDog(null)
      })
  }
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
        {
          dogs.map(dg => (
            <li key={dg.id}>
          {dg.name}, {dg.breed}, {dg.adopted ? '' : 'NOT'}adopted
          <div>
            <button onClick={editDog}>Edit</button>
            <button onClick={deleteDog}>Delete</button>
          </div>
        </li>
          ))
        }
      </ul>
    </div>
  )
}
