import { useLayoutEffect, useState } from 'react'
import { Space, Card, Radio } from 'antd'
import Answer from '../components/Answer'

const Test = ({ title, answers, expected, nextTest }) => {
    const [answer, setAnswer] = useState('')
    const [bgColor, setBgColor] = useState('')
    const [isChosen, setIsChosen] = useState()

    const onChange = (e) => {
        setAnswer(e.target.value)
    }

    useLayoutEffect(() => {
        setIsChosen(false)
        setBgColor('#fff0')
    }, [])

    return (
        <Space direction="vertical">
            <Card title={title} headStyle={{ backgroundColor: bgColor }}>
                <Radio.Group onChange={onChange} value={answer}>
                    <Space direction="vertical">
                        {answers.map((answ, index) => (
                            <Answer key={index}
                                value={answ}
                                correctAnswer={expected}
                                setBgColor={setBgColor}
                                nextTest={nextTest}
                                isChosen={isChosen}
                                setIsChosen={setIsChosen}
                            />
                        ))}
                    </Space>
                </Radio.Group>
            </Card>
        </Space>
    )
}

export default Test