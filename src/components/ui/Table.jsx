export default function Table({
  columns = [],
  data = [],
  caption,
  className = '',
  striped = false,
  compact = false,
}) {
  return (
    <div className={`ds-table-wrap ${className}`.trim()}>
      <table className={`ds-table ${striped ? 'ds-table--striped' : ''} ${compact ? 'ds-table--compact' : ''}`.trim()}>
        {caption && <caption className="ds-table__caption">{caption}</caption>}

        <thead className="ds-table__head">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="ds-table__th">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="ds-table__body">
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className="ds-table__row">
              {columns.map((column) => (
                <td key={column.key} className="ds-table__td">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}

          {data.length === 0 && (
            <tr className="ds-table__row ds-table__row--empty">
              <td className="ds-table__empty" colSpan={columns.length}>
                Нет данных.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

