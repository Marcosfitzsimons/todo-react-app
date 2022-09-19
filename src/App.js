import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { useState } from 'react'

function App() {

  const todoData = [
    {
      id: 1,
      content: 'Complete online Javascript course',
      isCheck: false,
    },
    {
      id: 2,
      content: 'Jog around the park 3x',
      isCheck: true,
    },
    {
      id: 3,
      content: '10 minutes meditation',
      isCheck: false,
    },
    {
      id: 4,
      content: 'Read for 1 hour',
      isCheck: false,
    },
    {
      id: 5,
      content: 'Pick up groceries',
      isCheck: false,
    },
    {
      id: 6,
      content: 'Complete Todo App on Frontend Mentor',
      isCheck: false,
    },
  ]

  const [data, setData] = useState(todoData)
  const [isMoon, setIsMoon] = useState(true);
  const [bgImg, setBgImg] = useState(true);

  const showItemsChecked = () => {
    data.filter(todoItem => {
      return todoItem.isCheck;
    })
  };

  const itemsActives = data.filter((todoItem) => todoItem.isCheck === false);

  const clearCompleted = () => {
    setData(prevValue => {
      return prevValue.filter((todoItem) => todoItem.isCheck === false);
    })
  }


  const handleIsCheck = (id) => {
    setData((prevValue) => {
      return prevValue.map((todoItem) => {
        return todoItem.id === id ? { ...todoItem, isCheck: !todoItem.isCheck } : todoItem
      })
    })
  };

  const handleMoon = () => {
    setIsMoon((prevValue) => !prevValue)
  }

  const handleBgImg = () => {
    setBgImg(prevValue => !prevValue);
  }


  return (
    <div className="h-screen bg-primary">
      <Header isMoon={isMoon} bgImg={bgImg} handleBgImg={handleBgImg} handleMoon={handleMoon} />

      <MainContent
        todoData={data}
        clearCompleted={clearCompleted}
        handleIsCheck={handleIsCheck}
        showItemsChecked={showItemsChecked}
        itemsActives={itemsActives} />

      <Footer />
    </div>
  );
}

export default App;
