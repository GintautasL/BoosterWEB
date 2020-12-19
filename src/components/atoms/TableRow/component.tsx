import React from 'react'
import { color } from '../../../theme'
import { TableCell } from '../..'

export const TableRow = ({ headerRow = null, rowStructure }) => (
  <tr className={headerRow ? 'tableHeaderRow' : 'tableRow'}>
    {rowStructure.rowContents.map(item => (
      <TableCell headerCell={item.headerCell} key={item.title}>
        {headerRow ? item.title : item.content}
      </TableCell>
    ))}
    <style jsx>
      {`
      .tableHeaderRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: ${color('light', 200)};
        font-weight: 800;
        font-size: 12px;
        height: 100%;
        text-transform: uppercase;
        text-align: center;
      }
      .tableRow {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: ${color('dark', 100)};
        color: ${color('light', 200)};
        font-size: 14px;
      }
      `}
    </style>
  </tr>
)
