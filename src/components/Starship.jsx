export default function Starship({ name, model, manufacturer, passengers}) {
  return (
    <div className="ship">
      <h3>{name}</h3>
      <div className="details">
        <p>Model: {model} </p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Passengers: {passengers}</p>
      </div>
    </div>
  );
}
