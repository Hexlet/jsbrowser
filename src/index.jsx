import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import init from './init.jsx';

const runBrowser = async () => {
  const vdom = await init();
  ReactDOM.createRoot(document.getElementById('root')).render(vdom);
};

runBrowser();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
