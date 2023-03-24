import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;

  constructor(
    name: string, 
  ) {
    super(name);
    this._energyType = 'mana';
    Mage.instanceNumbers += 1;
  }

  static instanceNumbers = 0;

  static createdArchetypeInstances() {
    return Mage.instanceNumbers;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;