
/*================= Todo list project using react hooks ============*/
/*============ I have used the useState hook ============*/


import "./App.css";
import { useState } from "react"; // I have imported useState from react
import List from "./List";
function App () {
  const [currentItem, setCurrentItem] = useState (null); //currentItem is a variable to hold the state and setCurrentItem is a method to update the state.
  const [itemList, updateItemList] = useState ([]); //itemList is a variable to hold the state and updatetitemList is a method to update the state.an initial value of an empty array

  const onChangeHandler = e => { //use of arrow function onChangeHandler with parameter event
    setCurrentItem(e.target.value); // to target the current value of the input field
  };

  const addItemsToList = () => { // to add an item to the List
    updateItemList([...itemList, { item: currentItem, key: Date.now()}]); //I have used a spread operator to hold all items previously added and add tghe current item on the top of those list of items I gave the items a key so that we can use them to delete later
    setCurrentItem(""); // to clear the input field to add another item after an item has been added
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input placeholder="Add Item" value={currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemsToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/> //render the List component and passing props
        </div>
      </header>
    </div>
  );
}


export default App;