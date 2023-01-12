import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="">{`Por favor, confirmanos tu presencia`}</h2>
            <p>
              Es muy importante para nosotros que nos digas lo antes posible si venis para poder organizarnos mejor <br /> Por favor, decinoslo por el mismo medio por el cual te llego esta invitacion, tenes tiempo hasta el 20/02/23, no la cuelgues!
            </p>
          </div>
        </div>
        {!isInvitation && (
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
