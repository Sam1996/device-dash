import React from 'react';
import {Table, Button} from 'react-bootstrap';
import Toggle from 'react-toggle';
import "../node_modules/react-toggle/style.css";

class Devicelist extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const devices = this.props.data;
        const toggle = this.props.func;
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return(
            <Table responsive bordered className="gutter">
                <thead className="darkTH">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Unit</th>
                        <th>Value</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            devices.map((device,i)=>(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td className="deviceName">{device.name}</td>
                                    <td>{device.unit}</td>
                                    <td>{device.value}</td>
                                    <td>{(new Date(device.timestamp)).toLocaleDateString('en-US', DATE_OPTIONS)}</td>
                                    <td className={(device.active) ? "table-success" : "table-danger"}>{(device.active) ? "Active" : "Inactive" }
                                        {/* <Button
                                            variant = {(device.active) ? "success" : "danger"}
                                            onClick={() => toggle(device.name,device.active)}
                                        >
                                        {(device.active) ? "Active" : "Inactive" }
                                        </Button> */}
                                    </td>
                                    <td>
                                        <Toggle
                                            id='cheese-status'
                                            checked={device.active}
                                            onChange={() => toggle(device.name,device.active)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
        );
    };
};

export default Devicelist;