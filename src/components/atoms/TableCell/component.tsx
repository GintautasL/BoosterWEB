import React from 'react'

export const TableCell = ({ headerCell = null, children }) => (
  <React.Fragment>
    {headerCell ? (
      <th className="tableCell">{children}</th>
    ) : (
      <td className="tableCell">{children}</td>
    )}
    <style jsx>
      {`
        .tableCell {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          flex-basis: 0;
          cursor: default;
        }
      `}
    </style>
  </React.Fragment>
)
