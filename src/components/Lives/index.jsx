import { useContext } from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { AppContext } from '../../context'
import s from './Lives.module.css'

export const RenderLives = () => {
    const { lives } = useContext(AppContext)

    switch (lives) {
        case 1:
            return (
                <div className={s.lives}>
                    <HeartFilled style={{ paddingRight: '5px' }} />
                    <HeartOutlined style={{ paddingRight: '5px' }} />
                    <HeartOutlined />
                </div>
            )
        case 2:
            return (
                <div className={s.lives}>
                    <HeartFilled style={{ paddingRight: '5px' }} />
                    <HeartFilled style={{ paddingRight: '5px' }} />
                    <HeartOutlined />
                </div>
            )
        case 3:
            return (
                <div className={s.lives}>
                    <HeartFilled style={{ paddingRight: '5px' }} />
                    <HeartFilled style={{ paddingRight: '5px' }} />
                    <HeartFilled />
                </div>
            )
        default:
            return null
    }
}