import {createSelector} from 'reselect'

// Base user input selector
const selectUser = state => state.user;

// Returns the current user logged from the 'user' state
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);
