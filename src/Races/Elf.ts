import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdRacesInstances(): number {
    return Elf.instanceNumbers;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;