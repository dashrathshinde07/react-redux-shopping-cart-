import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design%2C-online-shopping-store-logo-template-b96b23a1a56e685fe30519cbf20883bc_screen.jpg?ts=1662903800" />
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink>
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
