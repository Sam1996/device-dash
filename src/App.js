import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cards from './status';
import Search from './search';
import Aside from './aside';
import Devicelist from './list';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            api : 'http://127.0.0.1:8888/device/',
            devices : [],
            deviceCount : [],
            searchList:[],
            isLoading:false
        }
        this.toggle = this.toggle.bind(this);
        // this.toggleAlert = this.toggleAlert.bind(this);
        this.filterByName = this.filterByName.bind(this);
    }

    // GET ALL THE DEVICES
    getDevices(){
        fetch(this.state.api,{method:'GET'})
        .then(res=>res.json())
        .then(res=>{this.setState ({devices:res.data,searchList:res.data}) })
        .then(()=>this.countDevice())
        .catch(err=>this.toggleAlert(err))
    }

    // UPDATE/PATCH ACTIVE STATE OF THE DEVICES
    patchDevice(name,state){
        this.toggleAlert("Loading");
        fetch(this.state.api+name+"?active="+!state,{method:'PATCH'})
        .then(res=>res.json())
        .then(res=>{
            if(res == "OK"){ this.getDevices(); this.toggleAlert("Finished patch"); }
            else{ this.toggleAlert("Error fetching data") }
        }).catch(err=>this.toggleAlert(err))
    }

    // COUNT THE ACTIVE, INACTIVE, TOTAL DEVICES
    countDevice(){
        const stateData = {
            total : this.state.devices.length,
            active : this.state.devices.filter(item=>item.active === true).length || 0,
            inactive : this.state.devices.filter(item=>item.active === false).length || 0
        }
        this.setState({deviceCount:stateData});
    }

    // PATCH DEVICSE FUNCTION TRIGGERER 
    toggle(name,state){ this.patchDevice(name,state) }

    // ALERT FUNCTION
    toggleAlert(x){
        console.log(x);
    }

    // SEARCH FILTER FUNCTION
    filterByName(e){
        var newList = this.state.searchList.filter(item=>{
            return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
        this.setState({devices:newList});
    }

    componentDidMount(){ this.getDevices(); }

    render(){
        const {devices,deviceCount} = this.state;
        return (
            <Row className="wrapper no-gutters">
                <Col lg={2} className="aside d-none d-md-block"><Aside /></Col>
                <Col lg={10} xs={12} className="main ml-auto">
                    <Col >
                        <Cards data={deviceCount}/>
                        <Search filterFunc={this.filterByName}/>
                        {/* <AlertBox state={isLoading} apiError={apiError}/> */}
                        <Devicelist data={devices} func={this.toggle}/>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default App;
