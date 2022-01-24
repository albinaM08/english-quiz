import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { AppContext } from '../../context'
import s from './Navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate()
  const { lives } = useContext(AppContext)

  const renderLives = () => {
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

  return (
    <div className={s.Navbar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <span className={s.brand} onClick={() => navigate('/')}>English Quiz Game</span>
          {lives > 0 &&
            renderLives()
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar