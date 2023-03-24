import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;

  constructor(
    name: string, 
  ) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdArchetypeInstances() {
    return Necromancer.instanceNumbers;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;