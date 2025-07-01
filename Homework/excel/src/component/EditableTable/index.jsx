import './style.sass'
import Row from './Row.jsx'
import {TableContext} from './const.js'
import { useState } from 'react'
import CellSelection from './CellSelection.jsx'
import CellInput from './CellInput.jsx'

const defaultCursor = {
    rowIndex: 0,
    columnIndex: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    isEditing: false
}

export default function ({columns, rows}) {
    const [cursor, setCursor] = useState({...defaultCursor})

    // console.log('columns', columns)
    const provider = {
        columns, rows, cursor, setCursor   
    }

    const onKeyDown = () => {
        console.log('onKeyDown')
        setCursor({...cursor, isEditing: true})
    }

    return (
        <TableContext value={provider}>
            <div style={{position: 'relative'}}>
                <table className={'editable-table'} tabIndex={0}>
                    <thead>
                        <tr>
                            {
                                columns.map(column => {
                                    return <th key={column.name}>{column.name}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((row, index) => {
                                return <Row rowIndex={index} key={row.id} row={row}/>
                            })
                        }
                    </tbody>
                </table>
                
                <CellInput/>
                <CellSelection/>
            </div>
        </TableContext>
    )
}