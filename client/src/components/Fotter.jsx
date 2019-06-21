import React, { Component } from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <MaterialIcon size={40} icon="phone" />
          <p className="footerTitle">phone</p>
          <p>+44 7305077968</p>
        </div>
        <div>
          <MaterialIcon size={40} icon="map" />
          <p className="footerTitle">Address</p>
          <p>Coventry, England</p>
        </div>
        <div>
          <MaterialIcon size={40} icon="email" />
          <p className="footerTitle">email</p>
          <p>hajdinim@uni.coventry.ac.uk</p>
        </div>
      </div>
    )
  }
}
