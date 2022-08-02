import './styles/main.scss';

import { Sheets as Pages } from './pages/Sheets';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
			<Pages />
    </Router>
  );
}

export default App;