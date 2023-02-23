import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: 'Add your feedback with ratings',
    //   rating: 0,
    // },
    // {
    //   id: 2,
    //   text: 'this is feedback 2',
    //   rating: 7,
    // },
    // {
    //   id: 3,
    //   text: 'this is feedback 3',
    //   rating: 8,
    // },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // updating feedback

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem } : item))
  }

  // editing the feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // deleting feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete it')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // adding feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}{' '}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
