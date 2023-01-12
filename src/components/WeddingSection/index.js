import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Ceremonía y celebración</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Ceremonia"
                time="20:30 HS"
                date="Sabado, 4 de Marzo de 2023"
                description="Av. Jorge Newbery 8000, Mar del Plata"
            />
            <WeddingInfoBox
              title="Celebración"
              time="21:15"
              date="Sabado, 4 de Marzo de 2023"
              description="Av. Jorge Newbery 8000, Mar del Plata"
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
