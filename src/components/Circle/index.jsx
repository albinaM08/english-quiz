import s from './Circle.module.css'

const Circle = ({ value, setValue }) => {
    return (
        <div onClick={() => setValue(value)} className={s.circle}>
            <span className={s.circle_text}>
                {value.name}
            </span>
        </div>
    )
}

export default Circle