import React, { Component } from 'react';
import axios from 'axios';
import './Repositories.css';
import moment from 'moment';


class Repositories extends Component {
    state = { 
        repositories : [],
        showRep : true,
        text : '',
        lang : '',
        noOfRepos: '',
        noOfStars: '',
        noOfFollowers: '',
        noOfFollowing: ''
     }
    
    componentDidMount(){
        axios.get('https://api.github.com/users/supreetsingh247/repos').then(resp =>{
            if(resp){
            console.log(resp);
            this.setState({repositories : resp.data})
            }
        })

        axios.get('https://api.github.com/users/supreetsingh247').then(resp =>{
            if(resp){
            //console.log(resp);
            this.setState({noOfRepos : resp.data.public_repos, 
                        noOfFollowers: resp.data.followers, 
                        noOfFollowing: resp.data.following})
            
            }
        })
    }

    langHandleChange(event){
        this.setState({lang: event.target.value});
    }

    render() { 

        
        console.log('-------------'+this.state.lang);

       let repositorie = '';
        if(this.state.showRep){
            if(this.state.repositories){
                let x=0;
            repositorie = this.state.repositories.map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                x++;
                return(
                  <div key={rep.id} class="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p class="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
            }

            if(this.state.text){
                let x=0;
            repositorie = this.state.repositories.filter(rep => rep.name.toLowerCase().includes(this.state.text)).map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                x++;
                return(
                  <div key={rep.id} class="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p class="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
            }

            if(this.state.lang){
                let x=0;
            repositorie = this.state.repositories.filter(rep => rep.language.toLowerCase().includes(this.state.lang)).map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                x++;
                return(
                  <div key={rep.id} class="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p class="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
            }

        }

        return (
          <div class="flex-item-right">
            <div class="nav-bar">
              <ul>
                  <li>
                      <a href="#home">Overview</a>
                  </li>
                  <li>
                      <a href="#news">Repositories
                          <span class="count">{this.state.noOfRepos}</span></a>
                  </li>
                  <li>
                      <a href="#contact">Stars
                          <span class="count">5</span></a>
                  </li>
                  <li>
                      <a href="#about">followers
                          <span class="count">{this.state.noOfFollowers}</span></a>
                  </li>
                  <li>
                      <a href="#about">following
                          <span class="count">{this.state.noOfFollowing}</span></a>
                  </li>
              </ul>
            </div>
            <div class="search-bar">
               <input type="text" onChange={(e) => this.setState({ text: e.target.value })} 
                  placeholder="Search repositories..." name="search"></input>

               <select name="type">
                        <option value="">type </option>
                        
                        <option value="">All </option>
                        <option value="">Public</option>
                        <option value="">Private</option>
                        <option value="">Sources</option>
                        <option value="">Forks</option>
                        <option value="">Archived</option>
                        <option value="">Mirrors</option>
                    </select>
                    
                    <select name="language">
                        <option value="">Language </option>
                        
                        <option value="">All</option>
                        <option value="">JavaScript</option>
                        <option value="">Java</option>
                        <option value="">HTML</option>
                    </select>

                <button class="new-btn">New</button>
            </div>
            <div>
                {repositorie}
            </div>
          </div>

        );
    }
}
export default Repositories;

{/* 
<div className="rep-body">
<div className="rep-row-1">
<div className="rep-nav">
   <ul>
     <li>Overview</li>
     <li 
       style={{ backgroundColor: "#E0D9D8", borderRadius: "4px" }}
     >
       Repositories
     </li>
     <li>Stars</li>
   </ul>
</div>
/div>

<div className="rep-row-2">
<div className="filter-input">
  <input
   type="text"
   onChange={(e) => this.setState({ text: e.target.value })}
  />
</div>

<div class="dropdown">
  <button class="dropbtn">
     Type:
         <i class="fa fa-caret-down"></i>
   </button>
   <div class="dropdown-content">
     <a href="">All</a>
     <a href="">Public</a>
     <a href="">Private</a>
     <a href="">Sources</a>
     <a href="">Forks</a>
     <a href="">Archived</a>
     <a href="">Mirrors</a>
   </div>
 </div>


  <div class="dropdown">
   <button class="dropbtn">
     Language
     <i class="fa fa-caret-down"></i>
   </button>
  
  
    <div onSelect={e => this.setState({ lang: e.target.value })} class="dropdown-content">
    

     <a value='All' href="#">All</a>  
     <a value='JavaScript' href="#">JavaScript</a>
     <a value='Java' href="#">Java</a>
     <a value='HTML' href="#">HTML</a>
    
   </div> 
 </div> 

 <div>
   <button className="button">New</button>
 </div>
 </div>
 <div className="rep-row-3">{repositorie}</div>
 </div>  */}