import s from './Home.module.css'

const Home = () => {
  return (
    <div className={s.Home}>
        <div className={s.header}>
            <span className={s.header_text}>Test Your English</span>
        </div>
        <div className={s.banner}>
            <div className={s.banner_container}>
                <div className={s.banner_wrapper}>
                    <span className={s.banner_header}>
                    Find out which exam may be best for you. Take our quick, free online test. 
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home