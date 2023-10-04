import Car from "../../components/Car/Car"
import './CarList.css'
const CarList = (props) => {
  return (
    <>
      <div className="car-list-container">
        <h1>List of Cars</h1>
        {props.cars.map(car =>
          <Car key={car._id} car={car} />
        )}
      </div>
    </>
  )
}

export default CarList