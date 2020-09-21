import {createSelector} from 'reselect'

const selectUser = state => state.user;

// Returns the current user logged from the 'user' state
export const selectCurrentUser = createSelector(
    [selectUser],
    selectUser => selectUser.currentUser
);
