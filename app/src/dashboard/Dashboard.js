import React from 'react';
import './Dashboard.css';
import Sidepanel from './sidepanel/Sidepanel';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
} from 'recharts';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      title:'',
      journal:'',
      moodStr:'',
      mood:0,
      positive:true,
    }
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleMood = this.handleMood.bind(this)
  }
  componentDidMount(){
    var stub1 = [
      {date:'10-12-2020',mood:6},
      {date:'11-12-2020',mood:7},
      {date:'12-12-2020',mood:8},
      {date:'13-12-2020',mood:9},
      {date:'14-12-2020',mood:9},
    ];
    this.setState({
      data:stub1
    })
  }

  handleTitle(e){
    this.setState({title:e.target.value});
  }

  handleText(e){
    this.setState({journal:e.target.value})
  }

  handleMood(e){
    var num = parseInt(e.target.value)
    this.setState({mood:num})
  }

  handleSubmit(){
    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    
    var prev_data = this.state.data
    var length = prev_data.length - 1
    var old_mood = prev_data[length].mood
    var new_data = {date:date, mood:this.state.mood}
    prev_data = [...prev_data,new_data]
    this.setState({data:prev_data},()=>{console.log(this.state.data)})
    console.log(old_mood + ' ' + this.state.mood)
    // check if mood increased or decrease
    if(old_mood > this.state.mood){
      this.setState({positive:false})
    }
    else{
      this.setState({positive:true})
    }
  }

  render(){
    return(
      <div className="dashboard">
        <div className ="row">
          <div className = "col-2">
            <Sidepanel/>
          </div>
          <div className = "col-8">
            <div className = "row">
              <div className ="col-6">
                <div style={{boxShadow:'5px 10px 8px #888888'}}className ="journal">
                  <p style={{color:'#fe5f55',fontSize:'30px'}}>Journal Entry</p>
                  <form>
                    <div class="mb-3">
                      <label style={{float:'left',paddingRight:'20px',paddingLeft:'20px'}}for="exampleInputEmail1" class="form-label">Journal Title:</label>
                      <input style={{width:'400px'}} class="form-control" id="title"  onChange={this.handleTitle}/>
                    </div>
                    <div>
                      <label style={{float:'left',paddingRight:'57px',paddingLeft:'20px'}} for="exampleInputEmail1" class="form-label">Journal:</label>
                      <textarea style={{width:'400px',marginBottom:'10px',height:'200px'}} class="form-control" placeholder="Journal something that you did." id="journal" onChange={this.handleText}></textarea>
                    </div>
                    <p style={{color:'grey',fontSize:'18px', marginBottom:'10px'}}>On a scale of 1-10 how are you feeling. One being terrible, and 10 being awesome.</p>
                    <div style={{float:'left'}}class="mb-3">
                      <label style={{float:'left',paddingRight:'70px',paddingLeft:'20px'}}for="exampleInputEmail1" class="form-label">Mood:</label>
                      <input style={{width:'100px'}}class="form-control" id="mood" aria-describedby="emailHelp" placeholder="1-10" onChange={this.handleMood}/>
                    </div>
                    <button style={{backgroundColor:'white',color:'#fe5f55',borderColor:'#fe5f55', marginLeft:'55px'}} type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </form>
                </div>
              </div>
              <div className ="col">
                <div style={{boxShadow:'5px 10px 8px #888888'}}className ="journal">
                  <p style={{color:'#fe5f55',fontSize:'30px'}}>Message From Improve</p>
                  {this.state.positive?
                    <div>
                      <p style={{color:'#1a012b',fontSize:'18px', marginTop:'40px'}}><strong>Great Job, you are improving!</strong></p>
                    </div>
                  :
                    <div style={{width:'80%',margin:'auto'}}>
                      <p style={{color:'#1a012b',fontSize:'18px', marginTop:'40px'}}><strong>On 13/12/2020 your mood was a 9.<br/> Try doing some of the things from 13/12/2020 like:<br/></strong> Ran 10 mile, and Read 2 Chapters of Cracking the Coding Interview</p>
                      <p style={{color:'#1a012b',fontSize:'18px', marginBottom:'10px'}}>Doing Some of these things will help improve your mood!</p>
                    </div>
                  }
                  
                </div>
              </div>
            </div>

            <div style={{boxShadow:'5px 10px 8px #888888'}}className ="graph">
              <p style={{color:'#fe5f55',fontSize:'30px'}}>Mood Graph</p>
              <LineChart width={1000} height={400} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="mood" stroke="#fe5f55" activeDot={{r: 2}}/>
              </LineChart>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Dashboard;