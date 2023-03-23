// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div>
      {children}
      <GrFormClose />
    </div>
  )
}
export default Notification
