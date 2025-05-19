import { Injectable } from '@angular/core';
import { iRecipes } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: iRecipes[] = [
    {
      id: '52771',
      title: 'Spicy Arrabiata Penne',
      image:
        'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      ingredients: [
        'penne rigate',
        'olive oil',
        'garlic',
        'chopped tomatoes',
        'red chilli flakes',
        'italian seasoning',
        'basil',
        'Parmigiano-Reggiano',
      ],
    },
    {
      id: '52777',
      title: 'Mediterranean Pasta Salad',
      image:
        'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      ingredients: [
        'mozzarella balls',
        'baby plum tomatoes',
        'fresh basil',
        'farfalle',
        'extra virgin olive oil',
        'Green Olives',
        'tuna',
        'salt',
        'pepper',
      ],
    },
  ];

  constructor() {}

  getAllRecipes(): iRecipes[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    console.log();
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });

    console.log(this.recipes);
  }
}
