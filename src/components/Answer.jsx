import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Radio } from 'antd'
import { AppContext } from '../context'
import { DefeatModal } from './Modal'

const Answer = ({ value, expected, setBgColor, nextTest, isChosen, setIsChosen }) => {
    const { lives, setLives, correctAnswers, setCorrectAnswers } = useContext(AppContext)
    const navigate = useNavigate()

    const checkColor = () => {
        if (expected === value) {
            setCorrectAnswers(correctAnswers + 1)
            setBgColor('#bcff9a')
            setIsChosen(true)
            setTimeout(() => nextTest(), 1000)
        }
        else {
            if (lives === 1) {
                DefeatModal(navigate)
            }
            else {
                setLives(lives - 1)
                setBgColor('#ffa1a2')
                setIsChosen(true)
                setTimeout(() => nextTest(), 1000)
            }
        }
    }

    return (
        <Radio onClick={checkColor} value={value} disabled={isChosen} >{value}</Radio>
    )
}

export default Answer