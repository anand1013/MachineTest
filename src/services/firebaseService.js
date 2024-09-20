// firebaseService.js
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "../configuration";

export const fetchDataFromDatabase = (path) => {
  const database = getDatabase(cong);

  return new Promise((resolve, reject) => {
    try {
      const collectionRef = ref(database, path);
      // Listen for changes in the collection
      onValue(
        collectionRef,
        (snapshot) => {
          const dataItem = snapshot.val();
          // Check if dataItem exists
          if (dataItem) {
            if (typeof dataItem === "object") {
              resolve(dataItem);
            } else {
              // Convert the object values into an array
              const displayItem = Object.values(dataItem);
              resolve(displayItem);
            }
          } else {
            resolve([]); // Return an empty array if no data exists
          }
        },
        (error) => {
          reject(error); // Reject if there's an error in fetching data
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
