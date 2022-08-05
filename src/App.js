import './styles/main.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sheets as Pages } from './pages/Sheets';
import SearchCategories from './pages/SearchCategories';
import Header from './pages/Header';

function App() {
  return (
    <Router>
			<Header />
			<SearchCategories />
			<Pages />
    </Router>
  );
}

export default App;