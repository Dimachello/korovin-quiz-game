import React from "react";
import "./BountyList.css";
import Bounty from "../../elements/hexagon-container/HexagonContainer";
import config from "../../utils/config";
import close from '../../imgs/close.png';

const BountyList = ({ answersCount, toggleMenu, additionalClasses }) => {
  return (
    <div className={additionalClasses ? `BountyListWrapper ${additionalClasses}` : 'BountyListWrapper'}>
      <div className="CloseWrapper">
        <img src={close} alt="close" className="Close" onClick={toggleMenu} />
      </div>
      <div className="BountyList">
        {config.bounty.map((item, idx) => {
          return (
            <Bounty
              key={item + idx}
              text={`${item}$`}
              additionalClass={
                idx < answersCount
                  ? "Bounty ChangeOpacity"
                  : idx === answersCount
                  ? "Bounty CurrentBounty"
                  : "Bounty"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default BountyList;
