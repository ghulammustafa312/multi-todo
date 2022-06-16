// import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
export const addTodo = (obj) => async (dispatch) => {
  let newObject = {
    title: obj.title,
  };
  await addDoc(collection(db, "todos"), newObject);
  dispatch({ type: "ADD_TODO", payload: newObject });
};
export const getTodo = () => async (dispatch) => {
  await onSnapshot(collection(db, "todos"), (querysnapshot) => {
    const allTodos = [];
    querysnapshot.forEach((todo) =>
      allTodos.push({ id: todo.id, ...todo.data() })
    );
    dispatch({ type: "GET_TODO", payload: allTodos });
  });
};
export const updateTodo = (id, obj) => async (dispatch) => {
  await updateDoc(doc(db, "todos", id), { title: obj });
  dispatch({ type: "UPDATE_TODO" });
};
export const deleteTodo = (obj) => async (dispatch) => {
  await deleteDoc(doc(db, "todos", obj));
  dispatch({ type: "DELETE_TODO" });
};
