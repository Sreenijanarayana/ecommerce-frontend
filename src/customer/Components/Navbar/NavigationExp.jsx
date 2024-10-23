import { Fragment, useEffect, useState } from "react"; 
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Importing navigation, routing, and authentication utilities
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "../../../config/navigationMenu";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple, purple } from "@mui/material/colors";
import { getUser, logout } from "../../../Redux/Auth/Action";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import TextField from "@mui/material/TextField";

// Utility function to concatenate class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationExp() {
  // State variables for managing UI states like menu, auth modal, etc.
  const [open, setOpen] = useState(false); // For mobile menu toggle
  const navigate = useNavigate(); // Navigation hook to programmatically change pages
  const dispatch = useDispatch(); // Redux dispatch for triggering actions
  const { auth, cart } = useSelector((store) => store); // Accessing the global state from Redux
  const [openAuthModal, setOpenAuthModal] = useState(false); // Auth modal toggle
  const [anchorEl, setAnchorEl] = useState(null); // To manage user menu dropdown anchor
  const openUserMenu = Boolean(anchorEl); // To check if user menu is open
  const jwt = localStorage.getItem("jwt"); // Getting JWT token from localStorage
  const location = useLocation(); // Accessing the current URL location

  // Fetching user and cart data when the component mounts or jwt changes
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)); // Fetch user data if authenticated
      dispatch(getCart(jwt)); // Fetch user's cart data
    }
  }, [jwt]); // Dependency array triggers when jwt changes

  // Handlers for user menu and modal interactions
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor element for menu dropdown
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null); // Close the user dropdown menu
  };

  const handleOpen = () => {
    setOpenAuthModal(true); // Open the auth modal
  };
  const handleClose = () => {
    setOpenAuthModal(false); // Close the auth modal
  };

  // Function to navigate to a category/section/item on click
  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`); // Navigate to a dynamic route based on category and item
    close(); // Close the popover (menu)
  };

  // Handle navigation after login/register or when auth state changes
  useEffect(() => {
    if (auth.user) {
      handleClose(); // Close auth modal after successful login
    }
    // Redirect user from login/register page if authenticated
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1); // Go back to the previous page
    }
  }, [auth.user]); // Triggers when the auth state changes (user login/logout)

  // Logout functionality
  const handleLogout = () => {
    handleCloseUserMenu(); // Close the user dropdown
    dispatch(logout()); // Trigger the logout action
  };

  // Navigation to the My Orders page or Admin dashboard based on user role
  const handleMyOrderClick = () => {
    handleCloseUserMenu(); // Close the user dropdown
    auth.user?.role === "ROLE_ADMIN"
      ? navigate("/admin") // If admin, navigate to admin dashboard
      : navigate("/account/order"); // If not, navigate to the user account's orders
  };

  return (
    
    <div className="bg-white pb-10">
      {/* Mobile menu (Dialog for smaller screens) */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          {/* Overlay transition for mobile menu */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            {/* Mobile menu panel transition */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  {/* Close button for mobile menu */}
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)} // Close mobile menu
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links and category navigation for mobile */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {/* Iterating through categories and sections for mobile navigation */}
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {/* Featured items for each category */}
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* Section items */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Static navigation links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Sign in button for mobile */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {auth.user ? (
                    <div className="flex">
                      <Button
                        variant="contained"
                        onClick={handleLogout}
                        color="error"
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <button
                        className="w-full block px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-gray-50"
                        onClick={handleOpen}
                      >
                        Sign in / Sign up
                      </button>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop navigation */}
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile menu toggle (hamburger icon) */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Company name</span>
                  <img
                    className="h-8 w-auto"
                    src="your-logo-url" // Update with your logo URL
                    alt="Company Logo"
                  />
                </Link>
              </div>

              {/* Navigation links */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          {/* Category title */}
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          {/* Flyout menu for each category */}
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {/* Featured items on right side */}
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    {/* Sections for left side */}
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${category.id}-${section.id}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* Links to section items */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${category.id}-${section.id}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <button
                                                  className="text-gray-500 hover:text-gray-800"
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                >
                                                  {item.name}
                                                </button>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              {/* Spacer for layout adjustment */}
              <div className="ml-auto flex items-center">
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  {/* Search bar */}
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <TextField
                        id="search"
                        placeholder="Search"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Cart icon */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.items.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>

                {/* User icon and dropdown */}
                {auth.user ? (
                  <>
                    <div>
                      <Button
                        id="basic-button"
                        onClick={handleUserClick}
                        startIcon={
                          <Avatar
                            sx={{
                              bgcolor: deepPurple[500],
                              color: "#ffffff",
                            }}
                          >
                            {auth?.user?.firstName.charAt(0).toUpperCase()}
                          </Avatar>
                        }
                      >
                        {auth?.user?.firstName}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </>
                ) : (
                  <Button variant="contained" onClick={handleOpen}>
                    Sign in / Sign up
                  </Button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      {openAuthModal && (
        <AuthModal
          open={openAuthModal}
          handleClose={handleClose}
          isAuth={!!auth.user}
        />
      )}
    </div>
  );
}
