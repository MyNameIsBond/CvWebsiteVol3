import React, { Component } from 'react'
import MaterialIcon from 'material-icons-react'

export default class Services extends Component {
  render() {
    return (
      <div className="servicesContainer">
        <div className="serTitle">
          <h1 className="newtitle">Services</h1>
          <div className="separator" />
        </div>
        <div className="services">
          <div>
            <MaterialIcon size={50} icon="devices_other" />
            <p className="servicesTitle">Responsive Design</p>
            <p className="servicesText">
              Websites created by Tony are responsive, and look great in every screen. Phone, Table,
              Computer.
            </p>
          </div>
          <div>
            <MaterialIcon size={50} icon="touch_app" />
            <p className="servicesTitle">User Experience</p>
            <p className="servicesText">
              Tony is high experienced in user experience due to been creating high quality. UX is
              very important for design and is being taken very seriously.
            </p>
          </div>
          <div>
            <MaterialIcon size={50} icon="phonelink_setup" />
            <p className="servicesTitle">Customizability</p>
            <p className="servicesText">
              Customers can change the direction of the project very easy. Customers will have the
              change to see the project on each stage.
            </p>
          </div>
          <div>
            <MaterialIcon size={50} icon="refresh" />
            <p className="servicesTitle">Agile</p>
            <p className="servicesText">
              Agile is being followed to develop every project, this means customers can stop the
              project at any time.
            </p>
          </div>
          <div>
            <MaterialIcon size={50} icon="picture_in_picture" />
            <p className="servicesTitle">Creative Design</p>
            <p className="servicesText">
              Design is a very important factor for every product. It is being applied the latest
              methodolodies for Creative Designing.
            </p>
          </div>
          <div>
            <MaterialIcon size={50} icon="record_voice_over" />
            <p className="servicesTitle">Customer Support</p>
            <p className="servicesText">
              Customers would be given Support after the project is ready and during the proccess.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
