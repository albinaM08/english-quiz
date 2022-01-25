import { useNavigate } from 'react-router-dom'
import { RenderLives } from '../../components/Lives'
import s from './Navbar.module.css'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className={s.Navbar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <span className={s.brand} onClick={() => navigate('/')}>English Quiz Game</span>
          <RenderLives />
        </div>
      </div>
    </div>
  );
}

export default Navbar