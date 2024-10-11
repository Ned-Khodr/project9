import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const id = action.payload.id
      state.cards[id] = action.payload
    }
  }
})

export const selectCards = (state) => state.cards.cards

export const selectCardById = (id) => {
  return (state) => {
    return state.cards.cards[id]
  }
}

// export const selectCardById = (id) => (state) => state.cards.items.find(card => card.id === id);

export const {
  addCard
} = cardsSlice.actions

export default cardsSlice.reducer