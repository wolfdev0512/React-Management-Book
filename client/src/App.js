import React, { Component } from 'react';

import './App.css';
import Customer from './components/Customer';

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import { async } from 'rxjs/internal/scheduler/async';

const styles = theme => ({
  root :{
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080,
  }
})



class App extends Component {

  state={
    customers : ""
  }

  //컴포넌트가 모두 준비가 된 상태가 된후 호출
  componentDidMount(){
      this.callApi()
      .then(res => this.setState({
        customers : res
      })).catch(err => console.log(err));
  }

  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props; //props는 변경될수 없는 데이터 명시
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
            

          </TableHead>
          <TableBody>
          {
          this.state.customers ? this.state.customers.map(
            c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}/>
                  )}) : ""
            }
            </TableBody>
          </Table>
        </Paper>

      // <div className="gray-backgroud">
      //   <img src={logo} lat="logo"/>
      //   <h2>Let's develop management system!</h2>
      // </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Hello React Project
      //       {/* Edit <code>src/App.js</code> and save to reload. */}
      //     </p>
      //     {/* <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}
      //   </header>
      // </div>
    );
  }
}

export default withStyles(styles)(App);
