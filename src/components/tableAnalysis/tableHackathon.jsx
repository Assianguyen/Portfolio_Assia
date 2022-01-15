import React, { Component } from 'react';
import ReactTable from "react-table-6";
import { Container, Row, Col } from "react-bootstrap";
import "react-table-6/react-table.css"
import { style } from "glamor";
import "./tableAnalysis.css"
import "bootstrap/dist/css/bootstrap.min.css";

function TableHackathon(props) {
   
    const data = [{
        act: 'ESP32 coding',
        acq_ex: 'Arduino',
        modes: '1',
        level: 'EX'
    }, {
        act: 'node-red',
        acq_ex: 'programming an simple interface',
        modes: 'Jérémie Grisolia, Sylvaine Lohez',
        level: 'AP'
    }, {
        act: 'english presentation',
        acq_ex: 'talking and selling an idea to people in english',
        modes: '3',
        level: 'AP'
    }
    ]
    const columns = [{
        Header: 'Activities',
        accessor: 'act',
        width: 150
    }, {
        Header: 'Acquired experience ',
        accessor: 'acq_ex'
    }, {
        Header: 'Modes',
        accessor: 'modes'
    }, {
        Header: 'Level(AP to EX)',
        accessor: 'level',
        width : 150
    }]
    return (
        <div className="test">
            <ReactTable 
                style={{
                    border: 'solid 1px white'
                }}
                data={data}
                columns={columns}
                showPagination={false}
                defaultPageSize={5}
            // pageSizeOptions={[2, 4, 6]}
            />
        </div>
    )
}
export default TableHackathon;  