import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdRacesInstances(): number {
    return Halfling.instanceNumbers;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;