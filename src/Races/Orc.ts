import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdRacesInstances(): number {
    return Orc.instanceNumbers;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;