import React from 'react';

const Header = () => (
  <section className="hero is-small is-dark is-bold">
    <div className="hero-body">
      <div className="container">    
        <a href="https://northcoders.com">  
          <img 
            className="title"
            src={"https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png"}
            alt="Northcoders logo"
            width="448" 
            height="112"
          />
        </a>
        <p className="title">
          News Forum
        </p>
        <p className="subtitle">
            Get what&#39;s <strong>new</strong> and <strong>popular</strong> on the internet.
        </p>
      </div>
    </div>
  </section>
);

export default Header;