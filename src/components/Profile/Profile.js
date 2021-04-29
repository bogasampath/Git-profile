import react, {Component} from 'react';
import axios from 'axios';
import './Profile.css';
import location from '../../assets/images/location.png';
import peopleIcon from '../../assets/images/two-people-icon.png';

const Profile = props =>{



        let profile = 
            
        <div class="flex-item-left">
        <img class="profile-img" src={props.profile.avatar_url} height="250px" width="250px" />
        <h1 class="name">{props.profile.name}</h1>
        <p class="id">{props.profile.login}</p>

        <p>{props.profile.bio}</p>

        <button class="edit-btn" type='button'>Edit bio</button>

        <p class="company">
            <span><img src={peopleIcon} width="20px" height="20px" alt="company: " /></span>
            <span>{props.profile.company}</span>
        </p>

        <p class="location">
            <span><img src={location} alt="location: " width="20px" height="20px" /></span>
            <span>{props.profile.location}</span>
        </p>
    </div>
            

        return(
            
            <div>
                {profile}
            </div>
        );
}

export default Profile;