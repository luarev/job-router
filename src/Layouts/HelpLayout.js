import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quasi
        ad omnis perspiciatis excepturi totam delectus, aut porro hic impedit
        assumenda earum molestiae ducimus autem unde consequatur. Ex, vel iusto!
      </p>

      <nav>
        <NavLink to="faq">View the F.A.Q</NavLink>
        <NavLink to="contact">Contact Us!</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
