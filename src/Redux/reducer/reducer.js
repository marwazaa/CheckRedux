import { ADD, DELETE, DONE, EDIT } from "../const/actionType";

const initialState = {
  list: [
    { id: Math.random(), text: "task1", isDone: false },
    { id: Math.random(), text: "task2", isDone: false },
    { id: Math.random(), text: "task3", isDone: false },
  ],
};

const todo = (state = initialState, action) => {

  switch (action.type) {

    case ADD:
      return { ...state, list: [...state.list, action.payload] };

    case DONE:
      return {...state, list: state.list.map((el) => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)};

    case EDIT:
      return {...state, list: state.list.map((el) => el.id === action.payload.id ? { ...el, text: action.payload.newText }: el)};

    case DELETE:
      return {...state, list: state.list.filter((el) => el.id !== action.payload)};

    default:
      return state;
  }
};
export default todo;

