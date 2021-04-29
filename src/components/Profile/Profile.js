import react, {Component} from 'react';
import axios from 'axios';
import './Profile.css';
import location from '../../assets/images/location.png';
import peopleIcon from '../../assets/images/two-people-icon.png';

class Profile extends Component{

    state={
        profile : []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/supreetsingh247').then(resp =>{
            if(resp){
            console.log(resp);
            this.setState({profile : resp.data})
            }
        })
    }

    render(){

        let profile = 
            
        <div class="flex-item-left">
        <img class="profile-img" src={this.state.profile.avatar_url} height="250px" width="250px" />
        <h1 class="name">{this.state.profile.name}</h1>
        <p class="id">{this.state.profile.login}</p>

        <p>{this.state.profile.bio}</p>

        <button class="edit-btn" type='button'>Edit bio</button>

        <p class="company">
            <span><img src={peopleIcon} width="20px" height="20px" alt="company: " /></span>
            <span>{this.state.profile.company}</span>
        </p>

        <p class="location">
            <span><img src={location} alt="location: " width="20px" height="20px" /></span>
            <span>{this.state.profile.location}</span>
        </p>
    </div>
            
            
            
            
            
            
            
            
            
            
            
            

        //         <div><img class='img' alt="Avatar" width='50%' height='50%'  src={this.state.profile.avatar_url}></img> </div> 
        //        <div>
        //        <div style={{fontSize: '18px', paddingTop : '15px'}}><span>{this.state.profile.name}</span></div>

        //        <div style={{fontSize: '14px'}}><span>{this.state.profile.login}</span></div>
               
        //        <div style={{paddingTop : '20px'}}>
        //             <div><button style={{width:'50%'}}>Edit</button></div>
        //             <div>{this.state.profile.company}</div>
        //             <div><img style={{width:'16px' ,height:'16px'}} src={location} alt='location: '></img>{this.state.profile.location}</div>
        //        </div>
               
        //         </div>
        //    </div>
        //    </div>        

        return(
            
            <div>
                {profile}
            </div>
        );
    }
}

export default Profile;