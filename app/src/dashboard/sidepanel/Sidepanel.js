import React from 'react';
import './Sidepanel.css';

const Sidepanel = ()=>(
  <div className="sidepanel">
    <div className="user">
      <p>Welcome, Kirat Rakhra</p>
    </div>
    <div className="underline"></div>
    <div className ="linkContainer">
      <p className="link" ><a href= "/#/dashboard" style={{textDecoration:'none',color:'white'}}><i style={{paddingRight:'10px'}}class="fas fa-chart-line"></i>Dashboard</a></p>
      <p className="link"><a href= "/#/journal" style={{textDecoration:'none',color:'white'}}><i style={{paddingRight:'10px'}}class="fas fa-book"></i>Journal Entries</a></p>
    </div>
  </div>
);

export default Sidepanel;