import { Component, OnInit } from '@angular/core';
import { iRecipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: false,
})
export class RecipesPage implements OnInit {
  recipes: iRecipes[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    // this.recipes = this.recipeService.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
