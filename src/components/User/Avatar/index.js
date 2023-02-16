import React from 'react'
import PropTypes from 'prop-types'
import {Avatar} from "@mui/material";

const UserAvatar = (props) => {
    return (
        <div>
            <Avatar>H</Avatar>
        </div>
    );
};

UserAvatar.propTypes = {
    UserAvatar: PropTypes.func,
}

export default UserAvatar;
