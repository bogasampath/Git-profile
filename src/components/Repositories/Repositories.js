import React, { useState } from 'react';
import './Repositories.css';
import moment from 'moment';


const Repositories =props =>{
    
    const[text, setText] = useState('');
    const[lang, setLang] = useState('');
  
        
       let repositorie = 'Something went wrong..!';
        
       if(props.repositories){
            
            repositorie = props.repositories.map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                
                return(
                  <div key={rep.id} class="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p class="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
        }

        if({text}){
            
          if(props.repositories){
            repositorie = props.repositories.filter(rep => rep.name.toLowerCase().includes({text})).map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                
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

        if({lang}){
                
            repositorie = props.repositories.filter(rep => rep.language.toLowerCase().includes({lang})).map(rep =>{
                
                let lastUpdated = moment(rep.updated_at).fromNow();
                
                return(
                  <div key={rep.id} class="repo-items">
                  <h2>{rep.name}</h2>
                  <p>{rep.description}</p>
                  <p class="updated-date">{lastUpdated}</p>
              </div>
                );
                
            })
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
                          <span class="count">{props.repositories.public_repos}</span></a>
                  </li>
                  <li>
                      <a href="#contact">Stars
                          <span class="count">5</span></a>
                  </li>
                  <li>
                      <a href="#about">followers
                          <span class="count">{props.repositories.followers}</span></a>
                  </li>
                  <li>
                      <a href="#about">following
                          <span class="count">{props.repositories.following}</span></a>
                  </li>
              </ul>
            </div>
            <div class="search-bar">
               <input type="text" onChange={(e) => setText(e)} 
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
export default Repositories;

