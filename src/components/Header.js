import React from "react";

const Header = () => {
    const title='Knowledge Hub';
    console.log(title);
  <header className="header" style={{ background: 'linear-gradient(to bottom, lightblue, pink)', padding: '1rem', height: '80px' }}>
    <h1 className="header-title">{title}</h1>
    </header>
};

export default Header;
