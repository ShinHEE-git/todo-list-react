import './App.css';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useState, useRef } from 'react';
export default function App() {
  const [todoItemList, setTodoItemList] = useState(["eat kimchi", "update Portfolio"])
  const [selectedItem, setSelectedItem] = useState()
  const inputForm = useRef(null)

  function createItem(e) {
    e.preventDefault();
    const inputText = e.target[0].value
    if (inputText.length === 0) {
      return;
    }
    const copyTodoItemList = todoItemList.concat(inputText)
    setTodoItemList(copyTodoItemList)
    e.target[0].value = ""
  }

  function updateItem(i) {
    console.log(inputForm)
    inputForm.current.hidden = false
    inputForm.current[0].value = todoItemList[i]
    setSelectedItem(i)
  }
  function submitUpdateItem(e) {
    e.preventDefault()
    const copyTodoItemList = todoItemList
    copyTodoItemList.splice(selectedItem, 1, inputForm.current[0].value)
    setTodoItemList([...copyTodoItemList])
    inputForm.current.hidden = true
  }
  function cancelUpdateItem() {
    inputForm.current.hidden = true
  }

  function deleteItem(i) {
    const copyTodoItemList = [...todoItemList]
    copyTodoItemList.splice(i, 1)
    setTodoItemList(copyTodoItemList)
  }

  return (
    <>
      <div>
        <ul>
          {todoItemList.map((item, i) => {
            return (
              <li key={i}>{item}
                <button onClick={() => updateItem(i)}><FaPen /></button>
                <button onClick={() => deleteItem(i)}><FaTrashAlt key={i} /></button>
              </li>)
          })}
        </ul>
        <form ref={inputForm} onSubmit={submitUpdateItem} hidden={true}>
          <input type="text" />
          <input type="submit" value="update" />
          <input type="button" value="X" onClick={() => { cancelUpdateItem() }} />
        </form>
      </div>
      <form onSubmit={createItem} >
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

