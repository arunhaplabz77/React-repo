import { createSelector } from 'reselect';

const selectOrganisationState = state => state.organisation;

export const selectOrganisations = createSelector(
    [selectOrganisationState],
    organisation => organisation.organisations
);
export const isLoading = createSelector(
    [selectOrganisationState],
    organisations => organisations.loading
);

// export const selectCartHidden = createSelector(
//   [selectCart],
//   cart => cart.hidden
// );

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     )
// );

// export const selectCartTotal = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity * cartItem.price,
//       0
//     )
// );