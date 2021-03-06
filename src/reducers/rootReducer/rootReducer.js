import products from '../../products';

export default function rootReducer(state = products, action) {
  // console.log('state', state);
  // console.log('state.currentSubscriptions', state.currentSubscriptions);
  // console.log('state.catalogue.products', state.catalogue.products);

  switch (action.type) {
    // case 'DISPLAY_SUBSCRIPTION':
    //   return;

    default:
      return {
        ...state,
        subscriptionNameArr: state.currentSubscriptions.map(pass => {
          const targetedProduct = state.catalogue.products.find(p => {
            return p.static_id === pass.product.staticId;
          });
          const category = targetedProduct.category;
          const name = targetedProduct.name;
          const newObjWithName = { ...pass, name, category };
          // console.log('newObjWithName', newObjWithName);
          return newObjWithName;
        }),

        suggestedMonthlySubscriptions: state.catalogue.products.filter(
          product => {
            return product.item_type === 'MONTHLY_SUBSCRIPTION';
          }
        )
      };
  }
}
