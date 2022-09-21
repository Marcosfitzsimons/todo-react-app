import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
function App() {

  const [isMoon, setIsMoon] = useState(true);
  const [bgImg, setBgImg] = useState(true);

  const handleMoon = () => {
    setIsMoon((prevValue) => !prevValue)
  }

  const handleBgImg = () => {
    setBgImg(prevValue => !prevValue);
  }

  /* const showCompletedItems = () => {
     data.filter(todoItem => {
       return todoItem.isCheck;
     })
   };
 
   const activeItems = data.filter((todoItem) => todoItem.isCheck === false);
 
   const clearCompleted = () => {
     setData(prevValue => {
       return prevValue.filter((todoItem) => todoItem.isCheck === false);
     })
   }
 */


  return (
    <>
      <div className="app h-screen bg-primary">
        <Header isMoon={isMoon} bgImg={bgImg} handleBgImg={handleBgImg} handleMoon={handleMoon} />

        <MainContent />

        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }} />
    </>
  );
}

export default App;
