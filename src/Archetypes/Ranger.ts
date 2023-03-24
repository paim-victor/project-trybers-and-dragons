import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;

  constructor(
    name: string, 
  ) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdArchetypeInstances() {
    return Ranger.instanceNumbers;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;