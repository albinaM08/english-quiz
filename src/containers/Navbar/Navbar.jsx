import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={s.Navbar}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <span className={s.brand}>English Quiz</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar