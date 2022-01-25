import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context'
import TestsSwiper from '../../components/TestsSwiper'
import { VictoryModal, NotBadModal } from '../Modal'

const TestsContainer = ({ tests }) => {
    const navigate = useNavigate()
    const [testIndex, setTestIndex] = useState(0)
    const { correctAnswers } = useContext(AppContext)

    const nextTest = () => {
        if (testIndex !== (tests.length - 1)) {
            setTestIndex(testIndex + 1)
        }
        else {
            if (correctAnswers === tests.length) {
                VictoryModal(navigate)
            }
            else {
                NotBadModal(navigate, correctAnswers, tests.length)
            }
        }
    }

    return (
        <TestsSwiper test={tests[testIndex]} nextTest={nextTest} />
    )
}

export default TestsContainer