import React from 'react';
import Sidepanel from '../dashboard/sidepanel/Sidepanel';

class Journal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {date:'10-12-2020',mood:6,title:'Sleep',text:'Today I only got 5 hours of sleep, and had to work overtime'},
        {date:'11-12-2020',mood:7,title:'Food',text:'Today I ate only 1200 calories. I felt a little tired'},
        {date:'12-12-2020',mood:8,title:'Running',text:'Today I ran 1 more mile than I usually run'},
        {date:'13-12-2020',mood:9,title:'Acomplishments',text:'Ran 10 mile, and Read 2 Chapters of Cracking the Coding Interview'},
        {date:'14-12-2020',mood:6,title:'Work',text:'Slept in for work and got yelled at.'},
      ]
    }
  }
  render(){
    return(
      <div style={{overflow:'auto'}} className="Journal">
        <div className ="row">
          <div className = "col-2">
            <Sidepanel/>
          </div>
          <div className = "col-10">
            <div style={{textAlign:'left',padding:'40px',color:'#1a012b',fontSize:'40px'}}>
              <p>Journal Entries</p>
            </div>
            <div style={{textAlign:'left',padding:'40px'}}>
              {this.state.data.map((item,i)=>
                <div>
                  <p style={{color:'#1a012b',fontSize:'20px'}}><strong>On {item.date} - {item.title}</strong></p>
                  <p style={{color:'#1a012b',fontSize:'16px'}}>Mood Score: {item.mood}</p>
                  <p style={{color:'#1a012b',fontSize:'16px'}}>{item.text}</p>
                  <div style={{width:'40%',height:'2px', backgroundColor:'black'}}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Journal;