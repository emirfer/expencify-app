import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bilješke o Troškovima</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Radna Ploča</NavLink>
    <NavLink to="/create" activeClassName="is-active">Kreirajte Trošak</NavLink>
  </header>
);

export default Header;
