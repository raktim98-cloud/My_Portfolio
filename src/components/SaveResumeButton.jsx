
import { useNavigate } from 'react-router'
import MyResumeButton from './helper/ResumeButton'

function ResumePage() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/resumepage")
    }
  return (
    <div>
       <MyResumeButton onClick={handleClick}>
          My Resume
        </MyResumeButton>
    </div>
  )
}

export default ResumePage