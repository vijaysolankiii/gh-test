import React, { useEffect } from "react";



function UserBannerSection(props) {
  useEffect(() => {
    setTimeout(() => {document.querySelectorAll('.skeleton-body').forEach(item => item.classList.remove('skeleton-box'));},500)
  })
  return (
    <div className="profile_banner_wrap">
      <div
        className="profile_banner d-flex skeleton-body skeleton-box"
        style={{ backgroundImage: `url(${props.heroBg})` }}
      >
        <div className="banner-bottom__area item-center">
          <div className="profile_icon item-center skeleton-body skeleton-box">
          <img className="skeleton-body skeleton-box" src={props.profileLogo} alt="" />
          </div>
          <div className="profile_heroText">
            <h1 className="d-flex profile_heroText--name">
              <div id="card-first-name">{props.firstName}</div>
              <div id="card-last-name">{props.lastName}</div>
            </h1>

            <div className="user-profession d-flex">
              <div className="profile_heroText--position  font-bold text-uppercase">
                {props.organization}
              </div>
              <div className="profile_heroText--orgName user_position text-uppercase">
                {/* (Position) */}
              </div>
            </div>
            <div className="data-info profile_heroText--orgName text-capital">
              {props.designation}
            </div>
          </div>
        </div>
      </div>
      <div className="dark-toggle">
        <input
          type="checkbox"
          className="checkbox"
          // onChange={changeMode}
          id="checkbox"
        />
        {/* <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"></div>
        </label> */}
      </div>
    </div>
  );
}

export default UserBannerSection;
