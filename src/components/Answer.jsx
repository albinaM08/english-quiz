import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Radio } from 'antd'
import { AppContext } from '../context'

const Answer = ({ value, correctAnswer, setBgColor, nextTest, isChosen, setIsChosen }) => {
    const navigate = useNavigate()
    const { lives, setLives } = useContext(AppContext)

    const checkColor = () => {
        if (correctAnswer === value) {
            setBgColor('#bcff9a')
            setIsChosen(true)
            setTimeout(() => nextTest(), 1000)
        }
        else {
            if (lives === 1) {
                setTimeout(() => navigate('/'), 1000)
            }
            else {
                setLives(lives - 1)
            }
            setBgColor('#ffa1a2')
            setIsChosen(true)
            setTimeout(() => nextTest(), 1000)
        }
    }

    return (
        <Radio onClick={checkColor} value={value} disabled={isChosen} >{value}</Radio>
    )
}

export default Answer