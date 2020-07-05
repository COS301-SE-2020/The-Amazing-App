import React from 'react'
import { Dropdown, Icon, Modal} from 'semantic-ui-react'
import image2 from "./no_picture.jpg"
import UpdatePreferences from "./UpdatePreferences";

const trigger = (
    <div>
        <img src={image2} className="ui avatar image" alt="userImage" style={{height: 20, width: 20}}/>
    </div>
)

const options = [
   <UpdatePreferences />,
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

const UserOptions = () => (
        <Dropdown
    trigger={trigger} options={options} pointing='top left' icon={null}/>
    
    
)

export default UserOptions;