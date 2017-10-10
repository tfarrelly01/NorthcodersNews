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
            width="672" 
            height="168"
          />
        </a>
        <p className="title is-1">
          News Forum
        </p>
        <p className="subtitle is-3">
            Get what&#39;s <strong>new</strong> and <strong>popular</strong> on the internet.
        </p>
      </div>
    </div>
  </section>
);

export default Header;