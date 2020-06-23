import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

const initialState = {

    additionalPrice: 0,

    car: {
        price: 5000,
        name: 'Lexus SC300 "drift boi"',
        image:'https://images.cdn.circlesix.co/image/1/1000/0/uploads/posts/2017/02/0e7f1c2a6392428fd72226d189dc655a.jpg',
        features: []
    },

    additionalFeatures: [
        { id: 1, name: '2JZ', price: 1500 },
        { id: 2, name: '60mm turbo', price: 2000 },
        { id: 3, name: 'Street Comp Tires', price: 700 },
        { id: 4, name: 'Built Rear Diff', price: 3000 }
    ]

}; 


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
                additionalFeatures: state.additionalFeatures.filter(item => {
                    console.log(item)
                    if (item.id !== action.payload.id) {
                        return (item)
                    } return null 
                })

            }

        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features.filter(item => item.id !== action.payload.id)
                    ]
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }


        default:
            return state

    }

}
