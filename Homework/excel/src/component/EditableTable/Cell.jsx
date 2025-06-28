export default function ({row, column}) {
    const cell = row[column.name]

    return (
        <td>{cell}</td>
    )
}