import React from "react";
import {cookies} from "next/headers";

const Header = () => {
    const userCookie = cookies().get("user")
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                {user ? (
                    <li>{user.email}</li>
                ) : (
                    <li>Log in</li>
                )}
            </ul>
        </div>
    );
};

export default Header;
