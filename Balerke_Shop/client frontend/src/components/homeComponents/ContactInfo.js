import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Звоните нам по номеру</h5>
            <p>+7 (707) 689-12-13</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Казахстан</h5>
            <p>г. Алматы, ул. Сатпаева 22</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Почта</h5>
            <p>kjennie263@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
