import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number): Promotion {
    return Promise.resolve((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return Promise.resolve((promotion) => promotion.featured)[0];
  }
}
