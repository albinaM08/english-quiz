import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TestsSwiper from '../../components/TestsSwiper'

const TestsContainer = ({ tests }) => {
    const navigate = useNavigate()
    const [testIndex, setTestIndex] = useState(0)

    const nextTest = () => {
        if (testIndex !== (tests.length - 1)) {
            setTestIndex(testIndex + 1)
        }
        else {
            setTimeout(() => navigate('/'), 1000)
        }
    }

    return (
        <TestsSwiper test={tests[testIndex]} nextTest={nextTest} />
    )
}

export default TestsContainer