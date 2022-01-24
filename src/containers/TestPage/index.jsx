import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import TestService from '../../API/TestService'
import TestsContainer from '../../components/TestsContainer'
import capitalize from '../../utilts/capitalize'
import { AppContext } from '../../context'
import s from './TestPage.module.css'

const TestPage = () => {
    const params = useParams()
    const { theme, level } = params
    const { setLives } = useContext(AppContext)
    const [tests, setTests] = useState([])

    const fetchTests = async (theme, level) => {
        const response = await TestService.getByThemeAndLevel(theme, level)
        setTests(response.data)
    }

    useEffect(() => {
        setLives(3)
        fetchTests(theme, level)
    }, [])

    return (
        <div className={s.TestPage}>
            <div className={s.header}>
                <span className={s.header_text}>English {capitalize(theme)} Quizzes - {capitalize(level)}</span>
            </div>
            <div className={s.main}>
                <TestsContainer tests={tests} />
            </div>
        </div>
    );
}

export default TestPage