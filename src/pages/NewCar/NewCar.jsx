import { useState } from "react"
import "./NewCar.css"
import { v4 as uuidv4 } from 'uuid'
import { SketchPicker } from "react-color"

const NewCar = (props) => {

  const [formData, setFormData] = useState({
    _id: uuidv4().replaceAll('-', ''),
    make: '',
    model: '',
    year: '',
    color: '#000',
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.handleAddCar(formData)
  }

  function handleChangeComplete(color){
    setFormData({...formData, color: color.hex})
  }

  return (
    <>
      <div className="new-car-container">
        <h1 style={{color: formData.color}}>Add Car</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={formData.make} type="text" name="make" placeholder="Make" />

          <input onChange={handleChange} value={formData.model} type="text" name="model" placeholder="Model" />

          <input onChange={handleChange} value={formData.year} type="text" name="year" placeholder="Year" />

          <SketchPicker 
            color={formData.color}
            onChangeComplete={handleChangeComplete}
            disableAlpha={true}
            width="200"
          />

          <button type="submit">Add Car 🚘</button>

        </form>
      </div>
    </>
  )
}

export default NewCar