import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/dai.jpeg';
import Groom from '@assets/images/santi.jpeg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Sábado, 4 de Marzo de 2023';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
				Queremos compartir con vos este momento tan especial en nuestras vidas y festejemos juntos
			  </p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Daiana</h3>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2 bg-red"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Santiago</h3>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
