import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { useUser } from "../hooks/useUser";
import LoadingSpinner from "../styleComponents/LoadingSpinner";

const Profile = () => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  // state for updating user info
  const [updateInfo, setUpdateInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    picture: "",
  });

  const [passwordHasError, setPasswordHasError] = useState(false);

  const [pictureLoading, setPictureLoading] = useState(false);

  const navigate = useNavigate();

  // get user info from useUser hook
  const user = useUser();

  //fetch user info
  useEffect(() => {
    // function that handle the fetch of user info from our db
    const getUserInfo = async () => {
      setLoading(true);

      try {
        if (user?._id) {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/api/user/${user?._id}`
          );

          const responseJson = await response.json();

          if (responseJson) {
            setEmail(responseJson.data.email);

            setLoading(false);
          } else {
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error.stack);
        setLoading(false);
      }

      setLoading(false);
    };
    getUserInfo();
  }, []);

  // upload picture to cloudinary
  const postPictureToCloudinary = async (picture) => {
    setPictureLoading(true);
    if (picture.type === "image/jpeg" || picture.type === "image/png") {
      const data = new FormData();
      data.append("file", picture);
      data.append("upload_preset", "laghata-app");
      data.append("cloud_name", "laghata");

      try {
        const postPicture = await fetch(
          `${process.env.REACT_APP_CLOUDINARY_url}`,
          {
            method: "POST",
            body: data,
          }
        );
        const responseJson = await postPicture.json();

        setUpdateInfo({
          ...updateInfo,
          picture: responseJson.secure_url.toString(),
        });
        setPictureLoading(false);
      } catch (error) {
        console.log(error.stack);
        setPictureLoading(false);
      }
    } else {
      setPictureLoading(false);
    }
  };

  // update user info to the database
  const updateHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        updateInfo.password.toLowerCase() !==
        updateInfo.confirmPassword.toLowerCase()
      ) {
        setPasswordHasError(true);
        setLoading(false);
        return;
      } else {
        const requestOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updateInfo),
        };
        // function that update user information
        const UpdateUserInfo = async () => {
          if (user?._id) {
            const response = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}/api/user/${user?._id}`,
              requestOptions
            );

            const parseResponse = await response.json();

            if (parseResponse) {
              localStorage.setItem("token", parseResponse?.data?.token);

              setUpdateInfo({
                username: "",
                password: "",
                confirmPassword: "",
                email: "",
                picture: "",
              });

              setLoading(false);
              navigate("/");
            }
          }
        };
        UpdateUserInfo();
      }
    } catch (error) {
      console.log(error.stack);
      setLoading(false);
    }
  };

  // handle input changes
  const handleChange = (e) => {
    setUpdateInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ProfileContainer>
      {user?.username && user?.picture && email && !loading ? (
        <Wrapper>
          <Details>
            {!user?.isVerified && (
              <VerifyEmail>
                You need to verify your email before making any changes
              </VerifyEmail>
            )}
            <Header>
              {user.picture && <Img src={user.picture} alt="profile" />}
              <div>
                <UserName>{user?.username}</UserName>
                <Email>{email}</Email>
              </div>
            </Header>
            <UpdateInfo>
              <form onSubmit={updateHandler}>
                <UpdateTitle>Update Info:</UpdateTitle>

                <InputsDiv>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                  />
                  {passwordHasError && (
                    <Span>Please check that your passwords match</Span>
                  )}
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <InputPicture
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    accept="/image/*"
                    onChange={(e) => {
                      postPictureToCloudinary(e.target.files[0]);
                    }}
                  />
                  <Label htmlFor="file">Choose a picture</Label>
                </InputsDiv>
                {pictureLoading ? (
                  <Circles
                    height="30"
                    width="30"
                    color="#54cbe3"
                    ariaLabel="circles-loading"
                    wrapperClass="spinnerPicture"
                    visible={true}
                  />
                ) : (
                  updateInfo.picture && (
                    <ImgContainer>
                      <UpdateImg
                        src={updateInfo.picture}
                        alt="profile Picture"
                      />
                    </ImgContainer>
                  )
                )}
                {!user?.isVerified ? (
                  <button disabled={user?.isVerified} className="disabledBtn">
                    Submit
                  </button>
                ) : (
                  <Button type="submit">
                    {loading ? (
                      <Circles
                        height="30"
                        width="30"
                        color="#54cbe3"
                        ariaLabel="circles-loading"
                        wrapperClass="spinner"
                        visible={true}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
              </form>
            </UpdateInfo>
          </Details>
        </Wrapper>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
    </ProfileContainer>
  );
};

// profile page style
const ProfileContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 150px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
`;

const VerifyEmail = styled.div`
  border: 1px solid;
  width: 80%;
  max-width: 900px;
  padding: 10px;
  border-radius: 5px;
  background: #f5f0ed;
  margin-top: 20px;
  font-weight: 500;
`;

const Details = styled.div`
  max-width: 900px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  gap: 1.5rem;
  margin: 30px 0 40px 50px;

  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 30px auto;
  }
`;

const UserName = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Email = styled.p`
  font-size: 20px;
`;

const Img = styled.img`
  border-radius: 50%;
  margin-top: 30px;
  width: 190px;
  height: 190px;
  object-fit: cover;

  @media screen and (max-width: 700px) {
    width: 130px;
    height: 130px;
  }
`;

const UpdateInfo = styled.div`
  border-radius: 10px;
  border: 1px solid;
  width: 100%;
  height: fit-content;
  margin-bottom: 15px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex-direction: column;
  gap: 1.5rem;

  .spinnerPicture,
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinnerPicture {
    margin-top: 20px;
  }

  .disabledBtn {
    padding: 12px 15px;
    border: 1px solid white;
    border-radius: 25px;
    font-size: 18px;
    transition: all 0.7s ease-in-out;
    margin: 25px 0;
    width: 100%;
    color: black;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }
`;
const UpdateTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  font-size: 30px;
  margin: 20px 0;
`;

const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 350px;

  @media screen and (max-width: 700px) {
    width: 250px;
  }
`;

const Input = styled.input`
  padding: 12px 10px;
  border-radius: 10px;
  outline: none;
  font-size: 17px;
  border: 1px solid black;
`;

const Button = styled.button`
  padding: 12px 15px;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 25px;
  font-size: 18px;
  transition: all 0.7s ease-in-out;
  margin: 25px 0;
  width: 100%;
  cursor: pointer;

  :hover {
    background: transparent;
    color: black;
    border: 1px solid black;
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const InputPicture = styled.input`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Label = styled.label`
  font-size: 1.25em;
  font-weight: 500;
  color: black;
  border: 1px solid;
  background-color: transparent;
  padding: 10px 15px;
  display: inline-block;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: black;
    color: white;
  }
`;

const Span = styled.span`
  color: #cc0000;
  padding-left: 10px;
`;

const ImgContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
  }
`;
const UpdateImg = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 50%;
`;
export default Profile;
