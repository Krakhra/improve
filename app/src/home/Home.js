import React from 'react';
import './Home.css';
import graph from './graph.png'

const Home = () =>(
  <div className ="home">
    <div className ="about">
      <p className="aboutDescription">
        Become a better version of yourself with Improve
      </p>
      <p style={{color:'white',fontSize:'25px',paddingLeft:'60px'}}>
        Using advanced mood tracking algorithms, discover the patterns in your life and how to Improve.
      </p>
    </div>
    <div style={{textAlign:'center'}}className ="content">
      <p style={{color:'#fe5f55',fontSize:'75px'}}>
        Some of our Features
      </p>
      <div className = "container">
        <div className ="row">
          <div style={{boxShadow:'5px 10px 8px #888888',height:'400px'}} className="col-lg-4">
            <p style={{color:'#1a012b',fontSize:'20px',marginBottom:'50px'}}>Journaling</p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Journal Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Journal</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button style={{marginTop:'15px',float:'left', backgroundColor:'#1a012b',border:'none'}} type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div  style={{boxShadow:'5px 10px 8px #888888',height:'400px'}} className="col-lg-4">
            <p style={{color:'#1a012b',fontSize:'20px'}}>Advanced Analytics</p>
            <img src={graph}/>
          </div>
          <div style={{boxShadow:'5px 10px 8px #888888',height:'400px'}} className="col-lg-4">
            <p style={{color:'#1a012b',fontSize:'20px'}}>Mood Improvement</p>
            <i style={{fontSize:'200px',marginTop:'30px',color:'#fe5f55'}}class="fas fa-smile"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Home;