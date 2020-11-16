import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './BountyList.css';
import Bounty from '../../elements/HexagonContainer/HexagonContainer';
import config from '../../utils/config';
import close from '../../imgs/close.png';

const BountyList = ({ answersCount, toggleMenu, additionalClasses }) => (
      <div
    className={classnames('BountyListWrapper', {
		  [additionalClasses]: additionalClasses,
    })}
  >
    <div className="CloseWrapper">
      <img src={close} alt="close" className="Close" onClick={toggleMenu} />
    </div>
    <div className="BountyList">
      {config.bounty.map((item, idx) => (
        <Bounty
          key={item + idx}
          text={`${item}$`}
          additionalClass={
							idx < answersCount
							  ? 'Bounty ChangeOpacity'
							  : idx === answersCount
							    ? 'Bounty CurrentBounty'
							    : 'Bounty'
						}
        />
      ))}
    </div>
  </div>
);

BountyList.propTypes = {
  answersCount: PropTypes.number,
  toggleMenu: PropTypes.func,
  additionalClass: PropTypes.array
}

export default BountyList;
