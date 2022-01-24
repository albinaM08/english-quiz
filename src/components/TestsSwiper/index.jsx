import Test from '../Test'

const TestsSwiper = ({ test, nextTest }) => {
    const mixArray = (arr) => [...arr].sort(() => Math.random() - 0.5)

    return (
        <>
            {test &&
                <Test key={test.id}
                    title={test.title}
                    answers={mixArray(test.answers)}
                    expected={test.expected}
                    nextTest={nextTest}
                />
            }
        </>
    )
}

export default TestsSwiper