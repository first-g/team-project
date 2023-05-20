import About from '../components/About/About'
import Quotes from '../components/Quotes/Quotes'
import Pomodoro from '../components/Pomodoro/Pomodoro'
import Timer from '../components/Timer/Timer'
import Clicker from '../components/Clicker/Clicker'

export const data = [
    {
        path: '/',
        name: 'About',
        element: <About />
    },
    {
        path: '/quotes',
        name: 'Quotes',
        element: <Quotes />
    },
    {
        path: '/pomodoro',
        name: 'Pomodoro',
        element: <Pomodoro />
    },
    {
        path: '/timer',
        name: 'Timer',
        element: <Timer />
    },
    {
        path: '/clicker',
        name: 'Clicker',
        element: <Clicker />
    },
]