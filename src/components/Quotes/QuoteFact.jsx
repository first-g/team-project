import React from 'react'
import { Link } from 'react-router-dom'

const QuoteFact = () => {
  return (
    <>
      <ul>
        <li>
        1. Во время чтения глаза смотрят в разные стороны.
        </li>
        <li>
        2. При чтении почти 50% времени глаза человека смотрят на разные буквы. При этом линии взгляда могут как расходиться в разные стороны, так и перекрещиваться.
        </li>
        <li>
        3. 95% людей читают очень медленно - 180-220 слов в минуту (1 страницу за 1,5-2 минуты).
        </li>
        <li>
        4. При быстром чтении утомляемость глаз меньше, чем при медленном.
        </li>
        <li>
        5. Уровень понимания при традиционном чтении составляет 60%, при быстром - 80%.
        </li>
      </ul>
      <Link to='/quotes'>Закрыть</Link>
    </>
  )
}

export default QuoteFact