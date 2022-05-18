import data from '../source/data.json'

export const initialState = {
    items: data.collectionList
}

// Reducer
export function reducer(state = initialState, action) {
    let newState = {...state}

    switch (action.type) {
        case ACTION_TYPES.FILTER_COLLECTIONS:
            let data = initialState.items;
            const {input} = action.payload;
            console.log(input);
            if(input !== undefined && input !== ''){
                data = initialState.items.filter((e) => {
                    return e.title.indexOf(input) !== -1
                })
            }
            newState = {...state, items: data}
            break
    }

    return newState;
}

export const ACTION_TYPES = {
    FILTER_COLLECTIONS: "collections/filter"
}

export const actions = {
    filterCollections: (input) => {
        return {
            type: ACTION_TYPES.FILTER_COLLECTIONS,
            payload: {
                input
            }
        }
    }
}