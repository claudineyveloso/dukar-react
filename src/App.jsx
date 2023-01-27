import { useState  } from 'react'

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../node_modules/@popperjs/core/dist/umd/popper.min.js';


{/* JAVASCRIPT */}
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//import './js/bootstrap.bundle.min.js';

import './js/metismenujs.min.js';
import './js/simplebar.min.js';
import './js/eva.min.js';

//import './js/pass-addon.init.js';
import './js/eva-icon.init.js';

import './styles/bootstrap.min.css';
import './styles/icons.min.css';
import './styles/app.min.css';

import AppRoutes from './AppRoutes'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <AppRoutes />
    </div>
  )
}

export default App
