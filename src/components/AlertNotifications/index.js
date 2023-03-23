// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="home">
    <h1>Alert Notifications</h1>
    <div className="firsts">
      <div>
        <div className="first">
          <AiFillCheckCircle className="h1" />
          <Notification>
            <h1 className="h1">Success</h1>
          </Notification>
        </div>

        <Notification>
          <p>You can access all the files in the folder</p>
        </Notification>
      </div>
      <div>
        <GrFormClose className="close" />
      </div>
    </div>
    <div className="firsts">
      <div>
        <div className="first">
          <RiErrorWarningFill className="h2" />
          <Notification>
            <h1 className="h2">Error</h1>
          </Notification>
        </div>

        <Notification>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </Notification>
      </div>
      <div>
        <GrFormClose className="close" />
      </div>
    </div>
    <div className="firsts">
      <div>
        <div className="first">
          <MdWarning className="h3" />
          <Notification>
            <h1 className="h3">Warning</h1>
          </Notification>
        </div>

        <Notification>
          <p>Viewers of this file can see comments and suggestions</p>
        </Notification>
      </div>
      <div>
        <GrFormClose className="close" />
      </div>
    </div>
    <div className="firsts">
      <div>
        <div className="first">
          <MdInfo className="h4" />
          <Notification>
            <h1 className="h4">Info</h1>
          </Notification>
        </div>

        <Notification>
          <p>Anyone on the internet can view these files</p>
        </Notification>
      </div>
      <div>
        <GrFormClose className="close" />
      </div>
    </div>
  </div>
)
export default AlertNotifications
