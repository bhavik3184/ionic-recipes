import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { iRecipes } from '../recipes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: false,
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        // ERROR STATE
        return;
      }
      const recipeId: string = paramMap.get('recipeId') ?? '';
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: 'are you sure?',
        message: 'Do you really want to delete this recipe?',
        buttons: [
          { text: 'cancel', role: 'cancel' },
          {
            text: 'Okay',
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
