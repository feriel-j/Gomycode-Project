import React, { useState } from "react";
import "./StyleProfile/updatprofile.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../JS/userSlice/userSlice";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";

const UpdateProfile = ({ id, ping, setping }) => {
  const dispatch = useDispatch();

  const [profileEdit, setprofileEdit] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const handleEdit = () => {
    dispatch(updateUser({ id: id, user: profileEdit }));
    console.log(profileEdit);
    setping(!ping);
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/story/uploads",
      bodyFormData
    );
    console.log(data);
    setprofileEdit({ ...profileEdit, photo: data });
  };
  return (
    <div>
      <button
        className="edit_profilee"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <FaUserEdit />
      </button>
      {openModal && (
        <div className="modalBackgroundProfil">
          <div className="modalContainerProfil">
            <div className="headerProfilEdit">
              <div className="modalProfilTitle">
                <h1>Update your Informations</h1>
              </div>
            </div>
            <div className="modalmeetBody">
              <input
                type="file"
                name="file"
                placeholder="photo"
                onChange={uploadFileHandler}
              />
              <input
                type="text"
                placeholder="Name.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, name: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Lastname.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, lastname: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="about.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, about: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Phone.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, phone: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="City.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, city: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Country.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, country: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Lastdestination.."
                onChange={(e) => {
                  setprofileEdit({
                    ...profileEdit,
                    lastdestination: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Dream destination.."
                onChange={(e) => {
                  setprofileEdit({
                    ...profileEdit,
                    dreamdestination: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="gender.."
                onChange={(e) => {
                  setprofileEdit({ ...profileEdit, gender: e.target.value });
                }}
              />
            </div>
            <div className="modalProfilFooter">
              <button id="cancelBtn" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button
                onClick={() => {
                  handleEdit();
                  setOpenModal();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
