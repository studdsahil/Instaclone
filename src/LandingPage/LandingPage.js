import React from "react";
import { Link } from "react-router-dom";

export default function Landing_page() {
  const routes = [{ key: "Enter", route: "/postview" }];
  return (
    <div>
        <section className="landing_button_container">
          <p>10x Team </p>
          <button>
            <Link to={routes[0].route}>{routes[0].key}</Link>
          </button>
        </section>
        </div>
    
  );
}
