import './styles/main.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { Sheets as Pages } from './pages/Sheets';
import SearchCategories from './pages/SearchCategories';
import Categories from './components/Categories';
import Search from './components/Search';

function App() {
  return (
    <Router>
			<SearchCategories />
			<Pages />
    </Router>
  );
}

export default App;