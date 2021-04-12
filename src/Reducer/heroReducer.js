import myHeroes from "../store/defaultValues"
console.log(myHeroes.forEach((data)=> {
   console.log(data) 
}))
export const heroReducer = (state=myHeroes, action) => {
    switch (action.type) {
        case 'EDIT_HERO':
            return state.map((hero) => {
                if (hero.id === action.id) {
                    return {
                        ...hero,
                        ...action.update
                    }
                }
            })
        case 'ADD_HERO':
            return [
                ...state,
                action.hero
            ]
        default : return state
    }
}