import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center" >
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{width:"100%"}}
        />
<h1 className="mt-5 text-center d-block w-100">Invest in everything</h1>
<p className="text-center d-block w-100">
  Online platform to invest in stocks, derivatives, mutual funds, and more
</p>
<button
  className="p-2 btn btn-primary fs-5 mb-5 d-block mx-auto"
  style={{ width: "20%" }}
>
  Signup Now
</button>


      </div>
    </div>
  );
}

export default Hero;