import { Link } from 'react-router-dom';

export default function TOC() {
    return (
      <ul>
        <li id="wd-github"><Link to="https://github.com/KhushiPatel09/kanbas-react-web-app.git" target="_blank">Github</Link></li>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>
    );
  }  