type PlanetCardProp = {
  planetName : string;
  planetImage : string;
};

function PlanetCard({ planetName, planetImage } : PlanetCardProp) {
  const planeta = `Planeta ${planetName}`;

  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ planeta } />
    </div>
  );
}

export default PlanetCard;
