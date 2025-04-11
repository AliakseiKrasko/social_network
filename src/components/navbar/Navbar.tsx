import classes from './Navbar.module.css';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

type Props = {

};
export const Navbar = (props: Props) => {
    return (
            <nav className={classes.nav}>
                <>
                    <div>
                        <NavLink
                            to="/profile"
                            activeClassName={classes.active}
                            className={classes.item}
                        >
                            Profile
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/dialogs"
                            activeClassName={classes.active}
                            className={classes.item}
                        >
                            Messages
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/news"
                            activeClassName={classes.active}
                            className={classes.item}
                        >
                            News
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/musik"
                            activeClassName={classes.active}
                            className={classes.item}
                        >
                            Musik
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/settings"
                            activeClassName={classes.active}
                            className={classes.item}
                        >
                            Settinds
                        </NavLink>
                    </div>

                </>
            </nav>
    );
};