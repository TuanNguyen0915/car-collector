import { useState } from "react"
import "./NewCar.css"
import { v4 as uuidv4 } from 'uuid'

const NewCar = (props) => {

  const [formData, setFormData] = useState({
    _id: uuidv4().replaceAll('-', ''),
    make: '',
    model: '',
    year: '',
    color: '',
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  function handleSubmit() {
    props.handleAddCar(formData)
  }

  return (
    <>
      <div className="new-car-container">
        <h1>Add Car</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={formData.make} type="text" name="make" placeholder="Make" />

          <input onChange={handleChange} value={formData.model} type="text" name="model" placeholder="Model" />

          <input onChange={handleChange} value={formData.year} type="text" name="year" placeholder="Year" />

          <input onChange={handleChange} value={formData.color} type="text" name="color" placeholder="Color" />

          <button type="submit">Add Car 🚘</button>
        </form>
      </div>
    </>
  )
}

export default NewCar