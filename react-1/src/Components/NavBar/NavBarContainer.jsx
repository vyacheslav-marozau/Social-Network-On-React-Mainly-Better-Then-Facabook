import React from 'react';
import NavBar from "./NavBar";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return (state)
}
const NavBarContainer = connect(mapStateToProps)(NavBar);
export default NavBarContainer;