import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
function App() {

  const [isMoon, setIsMoon] = useState(true);
  const [bgImg, setBgImg] = useState(true);

  const handleMoon = () => {
    setIsMoon(prevValue => !prevValue)
  }

  const handleBgImg = () => {
    setBgImg(prevValue => !prevValue);
  }

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
            backgroundColor: isMoon ? '#ffffff' : '#25273c',
            color: isMoon ? '#393a4c' : '#e4e5f1'
          },
        }} />
    </>
  );
}

export default App;
