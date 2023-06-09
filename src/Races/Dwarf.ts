import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdRacesInstances() {
    return Dwarf.instanceNumbers;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;