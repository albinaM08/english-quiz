import { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Circle from '../../components/Circle'
import constants from '../../constants'
import { AppContext } from '../../context'
import s from './Home.module.css'

const Home = () => {
    const [theme, setTheme] = useState('')
    const [level, setLevel] = useState('')
    const { setLives } = useContext(AppContext)

    useEffect(() => {
        setLives(0)
    }, [])

    return (
        <div className={s.Home}>
            <div className={s.header}>
                <span className={s.header_text}>Test Your English</span>
            </div>
            <div className={s.banner}>
                <div className={s.banner_container}>
                    {theme && level ?
                        <>
                            <Navigate to={`/${theme.value}/${level.value}`} />
                        </>
                        :
                        <>
                            <div className={s.banner_wrapper}>
                                {theme ?
                                    <span className={s.banner_header}>
                                        Choose the difficulty level:
                                    </span>
                                    :
                                    <span className={s.banner_header}>
                                        Find out which exam may be best for you. Take our quick, free online quiz.
                                    </span>
                                }
                            </div>
                            <div className={s.banner_content}>
                                {theme ?
                                    <>
                                        {constants.levels.map(lvl =>
                                            <Circle key={lvl.id} value={lvl} setValue={setLevel} />
                                        )}
                                    </>
                                    :
                                    <>
                                        {constants.themes.map(th =>
                                            <Circle key={th.id} value={th} setValue={setTheme} />
                                        )}
                                    </>
                                }
                            </div>
                        </>
                    }
                </div>

            </div>
        </div>
    );
}

export default Home