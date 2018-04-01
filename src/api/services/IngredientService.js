import Sandwich from '../models/Sandwich';

class IngredientService{

  constructor(){
    this.sandwich = new Sandwich();
  }

  fullValues(){
    return new Promise((resolve)=>{
      let ingredientsValuesJSON = {
        proteins: this.sandwich.proteins,
        salads: this.sandwich.salads,
        ingredientsPrice: this.sandwich.ingredientsPrice,
        ingredientsBacon: this.sandwich.ingredientsBacon,
        ingredientsBurger: this.sandwich.ingredientsBurger,
        ingredientsEgg: this.sandwich.ingredientsEgg,
        ingredientsEggBacon: this.sandwich.ingredientsEggBacon
      }
      resolve(JSON.stringify(ingredientsValuesJSON));
    })
  }
}

export default new IngredientService();
