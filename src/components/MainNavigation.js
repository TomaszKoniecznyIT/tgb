import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const token = useRouteLoaderData("root");
  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          {token && (
            <>
              {is_manager && (
                <>
                  <li>
                    <NavLink
                      to="/manager"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Manager
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manager/shops"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      All Shops
                    </NavLink>
                  </li>
                </>
              )}
              {!is_manager && (
                <>
                  <li>
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                </>
              )}
            </>
          )}
          {!token && (
            <li>
              <NavLink
                to="/auth/singup"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Singup
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
