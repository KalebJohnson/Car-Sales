export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const UPDATE_TOTAL = 'UPDATE_TOTAL'


export const addFeature = (obj) => {
    return { type: ADD_FEATURE, payload: obj }}

export const removeFeature = (obj) => {
    return {type: REMOVE_FEATURE, payload: obj}}