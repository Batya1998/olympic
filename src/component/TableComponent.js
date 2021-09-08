import React from "react";

import { useTable } from 'react-table'
import Header from "./header/header";
import { Column } from "rc-table";

import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup, groupIndex) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((Column, index) => {
                            console.log("column", Column.Header)
                            return (
                                <th rowSpan={Column.Header == "Name" || Column.Header == "Age" ? 2 : 1}{...Column.getHeaderProps()}>

                                </th>
                            )
                        }
                        )}

                    </tr>
                )
                )}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                                return <td {...cell.getCellProps()}>
                                    {
                                        index == 0 ?
                                            <Link to={
                                                {
                                                    pathname: "/register/" + cell.value,
                                                    playerId: cell.value
                                                }}></Link> : cell.render('cell')
                                    }
                                </td>
                            })}

                        </tr>
                )
})}
           
           </tbody>

        </table>
    )


}
export default Table;