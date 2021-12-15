import React, { useState } from "react";
import "./dashStyle/userOne.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useResolvedPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, usersDel } from "../../JS/userSlice/userSlice";

const UserOne = ({ user, ping, setping }) => {
  const dispatch = useDispatch();
  const handledeleteUser = () => {
    dispatch(usersDel(user?._id));
    setping(!ping);
  };

  return (
    <div className="conatiner-admin">
      <h5 className="mail">{user._id}</h5>
      <h5>{user?.name} </h5>
      <h5>{user?.lastname}</h5>
      <h5 className="mail">{user?.email}</h5>
      <h5>{user.isAdmin ? "Admin" : "User"}</h5>

      <div className="user_btns B_U">
        <button
          className="role_ur"
          onClick={() => {
            dispatch(
              updateUser({ id: user._id, user: { isAdmin: !user.isAdmin } })
            );
            setping(!ping);
          }}
        >
          <h5>{user.isAdmin ? "Change to user" : "Change to admin"}</h5>
        </button>
        <button
          onClick={() => {
            handledeleteUser();
          }}
        >
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default UserOne;
