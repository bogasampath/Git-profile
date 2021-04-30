import React, { Component } from 'react';
import './Repositories.css';
import moment from 'moment';

class Repositories extends Component{ 

    state = {
    
      text : '',
      lang : '',
      type : '',
      followers: ''
    }
        
    render(){

       let repositorie = 'Something went wrong..!';
        
       if(this.props.repositoriesData){
            
            repositorie = this.props.repositoriesData.map(rep =>{
                
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                
                return(
                  <div key={rep.id} className="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p className="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
        }

         if(this.state.text){
            console.log("-----------------");

          if(this.props.repositoriesData){
            repositorie = this.props.repositoriesData.filter(rep => rep.name.toLowerCase().includes(this.state.text)).map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                this.setState({followers : rep.language})
                return(
                  <div key={rep.id} className="repo-items">
                    <h2>{rep.name}</h2>
                    <p>{rep.description}</p>
                    <p className="updated-date">
                        {lastUpdated}
                    </p>
                    <p>{rep.language}</p>
                    
                  </div>
                );
                
            })
          }
        }

        // if({lang}){
                
        //     repositorie = this.props.repositoriesData.filter(rep => rep.language.toLowerCase().includes({lang})).map(rep =>{
                
        //         let lastUpdated = moment(rep.updated_at).fromNow();
                
        //         return(
        //           <div key={rep.id} className="repo-items">
        //           <h2>{rep.name}</h2>
        //           <p>{rep.description}</p>
        //           <p className="updated-date">{lastUpdated}</p>
        //       </div>
        //         );
                
        //     })
        // }

        return (
          <div className="flex-item-right">
            <div className="nav-bar">
              <ul>
                  <li>
                      <a href="#home">Overview</a>
                  </li>
                  <li>
                      <a href="#news">Repositories
                          <span className="count">{this.state.followers}</span></a>
                  </li>
                  <li>
                      <a href="#contact">Stars
                          <span className="count">5</span></a>
                  </li>
                  <li>
                      <a href="#about">followers
                          <span className="count">{this.props.repositoriesData.followers}</span></a>
                  </li>
                  <li>
                      <a href="#about">following
                          <span className="count">{this.props.repositoriesData.following}</span></a>
                  </li>
              </ul>
            </div>
            <div className="search-bar">

            <input value= {this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })} name="search" type="text" />

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

                <button className="new-btn">New</button>
            </div>
            <div>
                {repositorie}
            </div>
          </div>

        );
  }
}
export default Repositories;

