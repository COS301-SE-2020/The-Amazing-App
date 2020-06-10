import React from 'react'
import { Dropdown, Icon} from 'semantic-ui-react'
import image2 from "./no_picture.jpg"

const trigger = (
    <div>
        <img src={image2} className="ui avatar image" alt="userImage" style={{height: 20, width: 20}}/>
          <span style={{fontSize: 14, color: "white"}} >
            Hello, Tapiwa
          </span>
    </div>
)

const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

const UserOptions = () => (
        <Dropdown
    trigger={trigger} options={options} pointing='top left' icon={null}/>
)

export default UserOptions;