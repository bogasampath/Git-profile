import React, {Component} from 'react';
import './ProfileBuilder.css';
import Profile from '../../components/Profile/Profile';
import Repositories from '../../components/Repositories/Repositories';
import GitHub from '../../assets/images/GitHub.png';

class ProfileBuilder extends Component{

    render(){
        return (
          <div className='body'>
            <div class="nav-flex-container">
              <a href="#home"><img src={GitHub} alt='Logo' height="40px" width="40px" /></a>
            </div>

            <div class="flex-container">
              <Profile />
              <Repositories />
            </div>

          </div>
        );
    }
}
export default ProfileBuilder;
