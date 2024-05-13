import React from 'react'
import { Link }from 'react-router-dom'
import Logo from "../../../Assets/uzavan.png";
import Boss from "../../../Assets/boss.png";
import Button from '../../../Componets/Button/Button';



function FarmerDetails() {
  return (
    <div>
    <div className="main">
      <div className="container">
        <div className="logo" id='logoadmin'>
          <div className="logoimg">
            <img src={Logo} id="logoimage" />
          </div>
          <div className="logoname">
            <h2>Uzhavan</h2>
          </div>
        </div>
        <div className="Navlings">
          <div className="navname">
            <p className="boss">Welcome Back! mr Jathusan</p> 

          </div>
          <div>
          <img src={Boss} className="bossimg"/>

          </div>
        </div>
     
      </div>
      {/* <div className="content" id='contentsfarmer'> */}
        <div className='alighnfarmer'>
        <div className='Notecontainer' id='notefarmer'>
          <p className='detailsfarm'>Farmer Details!</p>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th> Address</th>
                    <th> NIC Number</th>
                    <th>Contact</th>
                    <th> View</th>
                    <th> Delete</th>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr> <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Button class='edit' name="View"/></td>
                    <td><Button class='delete' name="Delete"/></td>
                </tr>
                
            </table>
        </div>

        {/* </div> */}
      
        
        </div>
     
      
    <div className="sidbarboss" id='kj'>
    <p className="sidetext">Uzhavan <br/><span5>The Connector</span5></p>

     <Link to='/Admin'><button className="dash">Dashbord</button></Link><br/>
     <Link to='/FarmerDetails'><button className="dash">Farmer</button></Link><br/>
     <Link to='/MachineryDetails'><button className="dash">Machine Owner</button></Link>
     <img src={Logo}className='footlogoboss'/>
    </div>
   
    </div>
  </div>
  )
}

export default FarmerDetails