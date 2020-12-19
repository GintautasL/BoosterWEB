import React from 'react'
import { TableRow } from '../..'
import { color } from '../../../theme'

export const Table = ({ data, rowStructure, notFoundText, rowKey = null }) => (
  <div className="tableWrapper">
    <React.Fragment>
      <table className="tableContent">
        <thead className="tableHeader">
          <TableRow headerRow rowStructure={rowStructure()} />
        </thead>
        <tbody>
          {data.map(item => (
            <TableRow
              key={item[rowKey] || item.id}
              rowStructure={rowStructure(item)}
            />
          ))}
          {!(data.length > 0) && (
            <tr className="tableNotFound">
              <td>
                <span>{notFoundText}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
    <style jsx>
      {`
        .tableWrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .tableContent {
          width: 100%;
        }
        .tableHeader {
          background-color: ${color('dark', 200)};
          min-height: 70px;
          width: 100%;
          border-radius: 10px 10px 0 0;
        }
        .tableNotFound {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          background-color: ${color('light', 400)};
        }
      `}
    </style>
  </div>
)

const styles = {}
