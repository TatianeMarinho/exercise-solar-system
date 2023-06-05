type MissionCardProp = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard({ name, year, country, destination } : MissionCardProp) {
  return (
    <div data-testid="mission-card">
      <h3 data-testid="mission-name">{ name }</h3>
      <p data-testid="mission-year">{ year }</p>
      <p data-testid="mission-country">{ country }</p>
      <p data-testid="mission-destination">{ destination }</p>
    </div>
  );
}

export default MissionCard;
