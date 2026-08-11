import './App.css';
import CardContainer from './components/CardContainer';
import TagContainer from './components/TagContainer';
import { useState } from 'react';
import SearchContainer from './components/SearchContainer';
import SearchBar from './components/SearchBar';
import { MdOutlineImageSearch } from "react-icons/md";



const tags = [
   'holiday', 'fitness', 'workout', 'nature',
  'celebrities', 'mountains', 'wallpapers', 'animals'
];

const App = () => {
  const [index, setIndex] = useState(0);
  const onSetPosition = position => setIndex(position);
  const [searchQuery, setSearchQuery] = useState('');


  const onSearchChange = event => setSearchQuery(event.target.value);

  return (
    <div className="container">
      <TagContainer onClick={ onSetPosition } index={ index } tags={ tags }/>
        <SearchContainer SvgIcon={ MdOutlineImageSearch }>
          <SearchBar onChange={ onSearchChange } value={ searchQuery }></SearchBar>
          
        </SearchContainer>
      <CardContainer query={ searchQuery || tags[index] } />
    </div>
  );
}

export default App;
