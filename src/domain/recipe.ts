export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;
  _prep_time?: number;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(aDescription: string) {
    this._description = aDescription;
  }
  get prep_time(): number | undefined {
    return this._prep_time;
  }

  set prep_time(aPrepTime: number) {
    if (aPrepTime < 0) {
      throw new Error("El tiempo de preparación no puede ser negativo.");
    }
    this._prep_time = aPrepTime;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category}  -descripcion: ${this.description} - tiempo de preparación: ${this.prep_time}`;
  }
}
