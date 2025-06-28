import style from './style.module.sass'
import Row from './Row.jsx'
import {TableContext} from './const.js'

export default function ({columns, rows}) {
    // console.log('columns', columns)
    const provider = {
        columns, rows
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
        </TableContext>
    )
}