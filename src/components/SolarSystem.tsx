import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {Planets.map((planet) => (
        <PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
    </div>
  );
}

export default SolarSystem;
