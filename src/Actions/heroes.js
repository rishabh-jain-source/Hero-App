

export const editHero=(id, update) => ({
    type: 'EDIT_HERO',
        id,
        update
})
 export const addHero = ({id,name}) => ({
  type: 'ADD_HERO',
    hero: {
    id,name
    }
})
