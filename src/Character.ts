import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const dado = getRandomInt(1, 10);

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = dado;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = dado;
    this._defense = dado;
    this._energy = {
      type_: this._archetype.energyType,
      amount: dado,
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return {
      type_: this._archetype.energyType,
      amount: this._energy.amount,
    }; 
  }

  receiveDamage(attackPoints: number): number {
    const dano = attackPoints - this._defense;

    if (dano > 0) { this._lifePoints -= dano; } 
    if (this._lifePoints <= 0) { this._lifePoints = -1; } 
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += dado;
    this._strength += dado;
    this._dexterity += dado;
    this._defense += dado;
    this._energy = { type_: this._archetype.energyType, amount: 10 };

    if (
      this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints; 
    } 
    
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;