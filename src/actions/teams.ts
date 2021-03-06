import { action } from 'typesafe-actions';
import { Team, TeamsActionTypes } from '../types/teams';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchRequest = () => action(TeamsActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: Team[]) => action(TeamsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(TeamsActionTypes.FETCH_ERROR, message);
