import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut, fetchInfo } from '../actions';
import './Header.scss';

class Header extends Component {
  switchLogin = () => {
    if (this.props.userInfo.logged) {
      this.props.handleSignOut();
    } else {
      this.props.handleFetchInfo();
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={this.switchLogin}>
            {this.props.userInfo.logged ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

const mapDispatchToProps = dispatch => ({
  handleSignOut: () => {
    dispatch(logOut());
  },
  handleFetchInfo: () => {
    dispatch(fetchInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
