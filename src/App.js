import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './App.css';
import AddItem from './components/AddItem/AddItem';
import List from  './components/List/List';
import Modal from  './components/Modal/Modal';

function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const onAddItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item]
    });
    onCloseModal();
  }
  const onOpenModal = () => {
    setOpenModal(() => {
      return true;
    })
  }
  const onCloseModal = () => {
    setOpenModal(() => {
      return false;
    })
  }
  const onDelete = (e, index) => {
    setItems((prevItems) => {
      const items = [...prevItems];
      items.splice(index,1)
      return items;
    })
  }
  return (
    <div className="App">
      <div className={'banner'}>
        <h2>Add Inventory</h2>
        <button className={'button -regular'} onClick={onOpenModal}>Add Item</button>
      </div>
      {ReactDOM.createPortal((
        <Modal onOpen={openModal} onClose={onCloseModal}>
          <AddItem onAddItem={onAddItem} />
        </Modal>
      ), document.body)}
       <List onDelete={onDelete} items={items} />
    </div>
  );
}

export default App;
