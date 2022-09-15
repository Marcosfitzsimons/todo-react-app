import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { useState } from 'react'

function App() {

  const [isMoon, setIsMoon] = useState(true);
  const [bgImg, setBgImg] = useState(true);

  const handleBgImg = () => {
    setBgImg(prevValue => !prevValue);
  }

  const handleMoon = () => {
    setIsMoon((prevValue) => !prevValue)
  }


  return (
    <div className="h-screen bg-primary">
      <Header isMoon={isMoon} bgImg={bgImg} handleBgImg={handleBgImg} handleMoon={handleMoon} />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
