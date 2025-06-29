import './style.sass'
import Row from './Row.jsx'
import {TableContext} from './const.js'
import { useState } from 'react'
import CellSeclection from './CellSelection.jsx'

const defaultCursor = {
    rowIndex: 0,
    columnIndex: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0
}

export default function ({columns, rows}) {
    const [cursor, setCursor] = useState({})

    // console.log('columns', columns)
    const provider = {
        columns, rows, cursor, setCursor   
    }

    return (
        <TableContext value={provider}>
            <table className={'editable-table'}>
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
                        rows.map(row => {
                            return <Row key={row.id} row={row}/>
                        })
                    }
                </tbody>
            </table>

            <CellSeclection/>
        </TableContext>
    )
}