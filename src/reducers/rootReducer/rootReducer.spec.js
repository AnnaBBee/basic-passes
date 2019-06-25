import rootReducer from './rootReducer';
import products from '../../products';

describe('rootReducer', () => {
  it('should return the initial state when there are no current subscriptions', () => {
    const testProducts = {
      currentSubscriptions: [],
      catalogue: {
        products: [products.catalogue.products[0]]
      }
    };

    const result = rootReducer(testProducts, {});
    expect(result).toEqual({
      ...testProducts,
      subscriptionNameArr: [],
      suggestedMonthlySubscriptions: []
    });
  });

  it('should return the initial state when there is an active subscription', () => {
    const testProducts2 = {
      currentSubscriptions: [products.currentSubscriptions[0]],
      catalogue: {
        products: [products.catalogue.products[2]]
      }
    };

    const result = rootReducer(testProducts2, {});

    expect(result).toEqual({
      ...testProducts2,
      subscriptionNameArr: [
        {
          ...products.currentSubscriptions[0],
          name: 'Sky Cinema Month Pass',
          category: 'CINEMA'
        }
      ],
      suggestedMonthlySubscriptions: [products.catalogue.products[2]]
    });
  });
});
