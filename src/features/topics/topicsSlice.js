import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const id = action.payload.id
      state.topics[id] = { ...action.payload, quizIds: [] }
    },
  },
  extraReducers: {
    [addQuiz]: (state, action) => {
      const quizId = action.payload.id
      const topicId = action.payload.topicId
      // if (state.topics[topicId]) {
      //   state.topics[topicId].quizIds.push(quizId)
      // }
      state.topics[topicId].quizIds.push(quizId)
    }
  }
})

export const selectTopics = (state) => state.topics.topics

export const {
  addTopic
} = topicsSlice.actions

export default topicsSlice.reducer