import React from 'react'
import Board from '../Board/Board'

const BigSquare = (props) => {
  return (
    <div className='border-4 border-gray-600 p-4'>
        <Board onMove={props.onMove} onWin={props.onWin} xIsNext={props.xIsNext}/>
    </div>
  )
}

export default BigSquare