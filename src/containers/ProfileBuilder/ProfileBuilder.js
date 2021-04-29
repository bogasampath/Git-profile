import React, {Component} from 'react';
import './ProfileBuilder.css';
import Profile from '../../components/Profile/Profile';
import Repositories from '../../components/Repositories/Repositories';
import GitHub from '../../assets/images/GitHub.png';
import axios from 'axios';

class ProfileBuilder extends Component{

  state = {
    profile: [],
    repositories : []
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/supreetsingh247').then(resp =>{
      
        if(resp){
          this.setState({profile : resp.data});
        }
      }
    );
    
    axios.get('https://api.github.com/users/supreetsingh247/repos').then(resp =>{
      
      if(resp){
        this.setState({repositories : resp.data});
      }
    }
    );

  }

    render(){
        return (
          <div className='body'>
            <div class="nav-flex-container">
              <a href="#home"><img src={GitHub} alt='Logo' height="40px" width="40px" /></a>
            </div>

            <div class="flex-container">
              <Profile profile = {this.state.profile} />
              <Repositories repositoriesData = {this.state.repositories}/> 
            </div>

          </div>
        );
    }
}
export default ProfileBuilder;
