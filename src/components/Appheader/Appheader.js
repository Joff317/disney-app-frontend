import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };

  return (
    <div className="header_space">
      <button className="header_space_brand" href="/" type="link">
      </button>
      <div className="auth_buttons">
        {user ? (
          <>
            <button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </button>
            <button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="auth_button_login" href="/signin" type="link">
              Login
            </button>
            <button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppHeader;