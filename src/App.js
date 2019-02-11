import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '박제창',
    'birthday': '888888',
    'gender': 'male',
    'job': '대학원생'
  },

  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '박제창',
    'birthday': '888888',
    'gender': 'male',
    'job': '대학원생'
  },

  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '박보검',
    'birthday': '888888',
    'gender': 'male',
    'job': '대학원생'
  },


]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(
            c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}

                />
              )
            }
          )
        }

        {/* <Customer
          id={customer[0].id}
          image={customer[0].image}
          name={customer[0].name}
          birthday={customer[0].birthday}
          gender={customer[0].gender}
          job={customer[0].job}

        />

        <Customer
          id={customer[1].id}
          image={customer[1].image}
          name={customer[1].name}
          birthday={customer[1].birthday}
          gender={customer[1].gender}
          job={customer[1].job}

        />

        <Customer
          id={customer[2].id}
          image={customer[2].image}
          name={customer[2].name}
          birthday={customer[2].birthday}
          gender={customer[2].gender}
          job={customer[2].job}

        /> */}
      </div>

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

export default App;
