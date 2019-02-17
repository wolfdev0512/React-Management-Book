
import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
           
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt='profile'/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>

                /* <CustomerProfile
               id = {this.props.id}
               image={this.props.image}
               name = {this.props.name}
               />

               <CustomerInfo
                birthday ={this.props.birthday}
                gender ={this.props.gender}
                job ={this.props.job}
               
               /> */
            
        )
    }
}

// class CustomerProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return(
//              <div>
//             {/* <h2>{this.props.name}</h2> */}
//             <p>{this.props.birthday}</p>
//             <p>{this.props.gender}</p>
//             <p>{this.props.job}</p>
//         </div>
//         )
//     }
// }
export default Customer;