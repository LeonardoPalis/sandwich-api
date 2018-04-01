export default class Sandwich{

  constructor(){
    this._proteins = ["Bacon", "Hambúrguer de carne", "Ovo", "Queijo"];
    this._salads = ["Alface"];
    this._ingredientsPrice = {"Bacon": 2.0, "Alface": 0.4, "Hambúrguer de carne": 3.0, "Ovo": 0.8, "Queijo": 1.5};
    this._ingredientsBacon = ["Bacon", "Hambúrguer de carne", "Queijo"];
    this._ingredientsBurger = ["Hambúrguer de carne", "Queijo"];
    this._ingredientsEgg = ["Ovo", "Hambúrguer de carne", "Queijo"];
    this._ingredientsEggBacon = ["Bacon", "Ovo", "Hambúrguer de carne", "Queijo"];
    Object.freeze(this);
  }

  get proteins(){
    return this._proteins;
  }

  get salads(){
    return this._salads;
  }

  get ingredientsPrice(){
    return this._ingredientsPrice;
  }

  get ingredientsBacon(){
    return this._ingredientsBacon
  }

  get ingredientsBurger(){
    return this._ingredientsBurger;
  }

  get ingredientsEgg(){
    return this._ingredientsEgg;
  }

  get ingredientsEggBacon(){
    return this._ingredientsEggBacon;
  }

}
