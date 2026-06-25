import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Profile = () => {
  const { navigate, setCartItems, setToken, backendUrl, token } =
    useContext(ShopContext);
  const [edit, setEdit] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    gender: "",
  });

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCartItems({});
    navigate("/login");
  };

  //update informetion

  const updateProfile = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/update-profile",
        info,
        { headers: { token } },
      );

      if (response.data.success) {
        setEdit(false);
        alert("Profile Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH PROFILE DATA
  const fetchInfo = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/profile",
        {},
        { headers: { token } },
      );

      if (response.data.success && response.data.user) {
        setInfo(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchInfo();
    }
  }, [token]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* LEFT SIDEBAR */}
        <div className="w-1/4">
          <div className="bg-white p-4 flex items-center gap-4 shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-12"
              alt=""
            />

            <div>
              <p className="text-gray-500 text-sm">Hello,</p>
              <p className="font-semibold">
                {info.name} {info.surname}
              </p>
            </div>
          </div>

          <div className="bg-white mt-4 shadow">
            <div
              onClick={() => navigate("/orders")}
              className="border-b p-4 font-semibold text-gray-700 cursor-pointer"
            >
              MY ORDERS
            </div>

            <div className="border-b p-4 font-semibold text-gray-700">
              ACCOUNT SETTINGS
            </div>

            <div className="pl-8 py-2 bg-gray-100 text-blue-600">
              Profile Information
            </div>

            <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer">
              Manage Addresses
            </div>

            <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer">
              PAN Card Information
            </div>

            <div className="border-t p-4 font-semibold text-gray-700">
              PAYMENTS
            </div>

            <div className="pl-8 py-2">Gift Cards ₹0</div>
            <div className="pl-8 py-2">Saved UPI</div>
            <div className="pl-8 py-2">Saved Cards</div>

            <div
              className="border-t p-4 font-semibold cursor-pointer text-red-500"
              onClick={logout}
            >
              LOGOUT
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-3/4 bg-white p-8 shadow">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
          </div>

          {/* NAME */}
          <div className="flex gap-6 mb-6">
            <input
              type="text"
              value={info.name || ""}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              className="border p-2 w-1/2"
              readOnly={!edit}
            />

            <input
              type="text"
              value={info.surname || ""}
              onChange={(e) => setInfo({ ...info, surname: e.target.value })}
              className="border p-2 w-1/2"
              readOnly={!edit}
            />
          </div>

          {/* GENDER */}
          <div className="mb-5">
            <p className="mb-2">Your Gender</p>
            <input
              type="radio"
              checked={info.gender === "other"}
              onChange={() => setInfo({ ...info, gender: "other" })}
              disabled={!edit}
            />{" "}
            Other

            <input
              type="radio"
              checked={info.gender === "male"}
              onChange={() => setInfo({ ...info, gender: "male" })}
              disabled={!edit}
            />{" "}

            Male

            <input
              type="radio"
              checked={info.gender === "female"}
              onChange={() => setInfo({ ...info, gender: "female" })}
              disabled={!edit}
            />{" "}
            Female

          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Email Address</p>

            <input
              type="email"
              value={info?.email || ""}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className="border p-2 w-1/2"
              readOnly={!edit}
            />
          </div>

          {/* PHONE */}
          <div>
            <p className="font-semibold mb-2">Mobile Number</p>

            <input
              type="text"
              value={info.phone || ""}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              className="border p-2 w-1/2"
              readOnly={!edit}
            />
          </div>
          <div className="flex flex- mt-6 ml-5 sm:flex-row gap-12">
            {!edit ? (
              <button onClick={() => setEdit(true)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                Edit
              </button>
            ) : (
              <button onClick={updateProfile} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
