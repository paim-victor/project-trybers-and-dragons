import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;

  constructor(
    name: string, 
  ) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdArchetypeInstances() {
    return Warrior.instanceNumbers;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;