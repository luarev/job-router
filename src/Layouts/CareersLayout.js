import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia natus
        possimus nulla. Molestiae quae placeat omnis veritatis ut facere
        assumenda iure iste, corrupti dicta nemo fuga similique quo cupiditate
        doloremque!
      </p>

      <Outlet />
    </div>
  );
}
