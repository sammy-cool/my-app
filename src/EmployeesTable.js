import React from 'react'

function EmplyoeesTable(props){
    return (
<table border="1">
<thead>
    <tr>
        <th> id </th>
        <th> name </th>
        <th> gender </th>

    </tr>
</thead>
<tbody>
    {
        props.data.map(function (emp) {
            return (
                <tr key={emp.id}>
                    <td> {emp.id} </td>
                    <td> {emp.name} </td>
                    <td> {emp.gender} </td>
                </tr>
            )
        })
    }
</tbody>
</table> 
    )
}
export default EmplyoeesTable