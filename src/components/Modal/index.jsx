import { Modal } from 'antd'

export const VictoryModal = (navigate) => {
    Modal.success({
        title: 'Congratulations!',
        content: (
            <div>
                <p>You have successfully passed the test!</p>
            </div>
        ),
        onOk() { setTimeout(() => navigate('/'), 300) },
    })
}

export const NotBadModal = (navigate, correctAnswers, testsCount) => {
    Modal.warning({
        title: 'Not bad',
        content: (
            <div>
                <p>You answered correctly {correctAnswers} times from {testsCount}</p>
                <p>Try again, you're almost there!</p>
            </div>
        ),
        onOk() { setTimeout(() => navigate('/'), 300) },
    })
}

export const DefeatModal = (navigate) => {
    Modal.error({
        title: 'You spent all your lives!',
        content: (
            <div>
                <p>Try again, you might be lucky!</p>
            </div>
        ),
        onOk() { setTimeout(() => navigate('/'), 300) },
    })
}