import './App.css'
import Header from './components/Header/Header'
import Teaching from './components/Teaching'
import Information from './components/Information'
import Intro from './components/Intro/Intro'
import TabsSection from './components/TabsSection/TabsSection'
import { useState } from 'react'
import Feedback from './components/Feedback/Feedback'
import Effect from './components/Effects/Effect'

function App() {
  const [tab, setTab] = useState('main')
  return (
    <>
      <Header/>
      <main>
        <Intro/>
        <TabsSection active = {tab} onChange = {(current) => setTab(current)} />

        {tab === 'main' &&(
          <>
            <Teaching/>
            <Information/>
          </>
        )}
        
        {tab === 'feedback' && <Feedback/>}

        {tab === 'effect' && <Effect/>}

      </main>
    </>
  )
}

export default App
