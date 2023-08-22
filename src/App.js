import { Route, Routes } from 'react-router-dom';
import './App.css';
import StoryOne from './components/StoryOne';
import StoryTwo from './components/StoryTwo';
import StoryThree from './components/StoryThree';
import StoryFour from './components/StoryFour';
import StoryFive from './components/StoryFive';

function App() {
  return(
    <Routes>
      <Route
        path='/'
        element={
          <div className='stories'>
            <button className='story-button'>
              <a href='/story-one'>Story One</a>
            </button>
            <button className='story-button'>
              <a href='/story-two'>Story Two</a>
            </button>
            <button className='story-button'>
              <a href='/story-three'>Story three</a>
            </button>
            <button className='story-button'>
              <a href='/story-four'>Story four</a>
            </button>
            <button className='story-button'>
              <a href='/story-five'>Story five</a>
            </button>
          </div>
        }
      />
      <Route path='/story-one' element={<StoryOne/>}/>
      <Route path='/story-two' element={<StoryTwo/>}/>
      <Route path='/story-three' element={<StoryThree/>}/>
      <Route path='/story-four' element={<StoryFour/>}/>
      <Route path='/story-five' element={<StoryFive/>}/>
    </Routes>
  )
}

export default App;
