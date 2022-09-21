import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserListingContext } from "../context/CurrentUserListingContext";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Circles } from "react-loader-spinner";
import Dialog from "../styleComponents/Dialog";
import { scrollToTop } from "../utils";
import { useUser } from "../hooks/useUser";

const UserListing = () => {
  // getting informations from user listing context
  const { userListing, setUserListing, deleteHandler, loading, setLoading } =
    useContext(CurrentUserListingContext);

  // // get information about current user from useUser hook
  const { _id: currentUserId } = useUser();

  // state for search bar
  const [search, setSearch] = useState("");

  // state for opening the delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  // getting the value of the search and put it in the search state
  const searchProduct = (event) => {
    setSearch(event.target.value);
  };

  // fetch user listing from database
  useEffect(() => {
    // function that handle the fetch of all user listing
    const getUserListing = async () => {
      setLoading(true);

      if (currentUserId) {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/renter-listing/${currentUserId}`
        );

        // parse the response received
        const responseJson = await response.json();

        if (responseJson) {
          setUserListing(responseJson.data);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    getUserListing();
  }, []);

  return (
    <UserListingContainerPage>
      <UserListingContainer>
        <Title>Your Listing</Title>
        <SearchBar>
          <Input
            type="text"
            placeholder="Search for a listing title"
            value={search}
            onChange={searchProduct}
          />
        </SearchBar>
        <ListingContainer>
          {loading ? (
            <Circles
              height="80"
              width="80"
              color="#252627"
              ariaLabel="circles-loading"
              wrapperClass="spinner"
              visible={true}
            />
          ) : (
            <>
              <ListingNav>
                <h3>Product & Title</h3>
                <h3>Category</h3>
                <h3>Subcategory</h3>
                <h3>IsBooked</h3>
              </ListingNav>
              {userListing &&
                userListing
                  .filter((product) => {
                    if (search === "") {
                      return product;
                    } else if (
                      product.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return product;
                    }
                  })
                  .map((listing) => {
                    return (
                      <ListingInfoContainer key={listing._id}>
                        <NavLink
                          to={`/listing/${listing._id}`}
                          className="navLink"
                        >
                          <Listing>
                            <Product>
                              <h1>{listing.name.slice(0, 17)}..</h1>

                              <img
                                src={listing.imageSrc[0]}
                                alt="Mountain Bike"
                              />
                            </Product>
                            <div>{listing.category}</div>
                            <div>{listing.subcategory}</div>
                            <div>{listing.isBooked.toString()}</div>
                          </Listing>
                        </NavLink>
                        <Icon>
                          <NavLink
                            to={`/userlisting/edit/${listing._id}`}
                            className="navLink"
                          >
                            <FiEdit
                              onClick={() => {
                                scrollToTop();
                              }}
                            />
                          </NavLink>
                          <MdDelete
                            onClick={() => {
                              setOpenDialog(true);
                            }}
                          />
                        </Icon>
                        {openDialog && (
                          <Dialog
                            message="Are you sure that you want to delete this listing?"
                            open={openDialog}
                            onClose={() => setOpenDialog(false)}
                            deleteHandler={() => {
                              deleteHandler(listing._id);
                              setOpenDialog(false);
                            }}
                          />
                        )}
                      </ListingInfoContainer>
                    );
                  })}
            </>
          )}
        </ListingContainer>
      </UserListingContainer>
    </UserListingContainerPage>
  );
};

// user listing style
const UserListingContainerPage = styled.div`
  min-height: 100vh;
  background-color: #f5f5f3;
  padding-bottom: 200px;
`;

const UserListingContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  .navLink {
    text-decoration: none;
    color: #242526;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  padding: 15px 20px;
`;

const SearchBar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const Input = styled.input`
  padding: 10px 15px;
  width: 40%;
  border-radius: 10px;
  outline: none;
  border: 1px solid;
  font-size: 16px;
  position: relative;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const ListingContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: 50px auto;

  .spinner {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    width: 85%;
  }
`;

const ListingInfoContainer = styled.div`
  position: relative;
`;

const Listing = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 20px 0;
  border-radius: 13px;
  position: relative;
  border: 1px solid;

  div {
    width: 250px;
    display: flex;
    justify-content: center;
  }
`;

const ListingNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-weight: 700;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  h1 {
    font-size: 17px;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 140px;
    height: 140px;
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 700px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 7px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  height: 100%;
  font-size: 30px;
  cursor: pointer;
`;
export default UserListing;
