import { Firestore, addDoc, collection, doc, onSnapshot } from "firebase/firestore";

const db = Firestore;

let moviesRef = collection(db, "movies");

export const moviesStatus = (object) => {
  addDoc(moviesRef, object)
    .then(() => {
      alert("Attempt Successful !!");
    })
    .catch((err) => {
      console.log("MoviesError", err);
    });
};

export const getAllMovies = () => {
  onSnapshot(moviesRef, (response) => {
    const movies = response.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(movies);
  });
};
