const Car = (props) => {
  return (
    <div className="car-card">
      <h3 style={{ color: props.car.color }}>{props.car.year} {props.car.make} {props.car.model}</h3>
    </div>
  )
}

export default Car