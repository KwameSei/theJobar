// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CssMUI from '../../components/muiCSS';
// import {
//   Box,
//   IconButton,
//   InputBase,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   Search,
//   Message,
//   DarkMode,
//   LightMode,
//   Menu,
//   Close,
//   Help,
//   Settings,
//   Notifications,
// } from '@mui/icons-material';
// import { setMode, setLogout } from '../../state/index';

// const Navigate = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const user = useSelector((state) => state.user);
//   const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');

//   const [fullName, setFullName] = useState('');
//   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); // Added line

//   const handleLogout = () => {
//     dispatch(setLogout());
//   };

//   const handleToggleMobileMenu = () => {
//     setIsMobileMenuToggled(!isMobileMenuToggled);
//   };

//   const isDarkMode = theme.palette.mode === 'dark';
//   const alt = isDarkMode ? theme.palette.grey[800] : theme.palette.grey[300];
//   const alt2 = isDarkMode ? theme.palette.grey[700] : theme.palette.grey[200];

//   React.useEffect(() => {
//     if (user) {
//       const { firstName, lastName } = user;
//       setFullName(`${firstName} ${lastName}`);
//     }
//   }, [user]);

//   return (
//     <CssMUI className="navigate" padding="1rem 6%" backgroundColor={alt}>
//       <CssMUI gap="1.5rem">
//         <Typography
//           fontWeight="bold"
//           fontSize="clamp(1rem, 2rem, 2.5rem)"
//           color={theme.palette.primary.main}
//           className="logo"
//           onClick={() => navigate('/')}
//           cursor="pointer"
//           sx={{
//             '&:hover': {
//               color: theme.palette.primary.light,
//               cursor: 'pointer',
//             },
//           }}
//         >
//           theJobar
//         </Typography>
//         {isNonMobileScreen && (
//           <CssMUI backgroundColor={alt2} borderRadius="1rem" padding="0.5rem 1rem" gap="3rem">
//             <InputBase placeholder="Search..." />
//             <IconButton>
//               <Search />
//             </IconButton>
//           </CssMUI>
//         )}
//       </CssMUI>

//       {/* DESKTOP NAV */}
//       {isNonMobileScreen ? (
//         <CssMUI gap="2rem">
//           <IconButton onClick={() => dispatch(setMode())}>
//             {isDarkMode ? (
//               <DarkMode sx={{ fontSize: '25px' }} />
//             ) : (
//               <LightMode sx={{ fontSize: '25px', color: dark }} />
//             )}
//           </IconButton>
//           <Message sx={{ fontSize: '25px' }} />
//           <Notifications sx={{ fontSize: '25px' }} />
//           <Help sx={{ fontSize: '25px' }} />
//           <Settings sx={{ fontSize: '25px' }} />

//           <FormControl variant="standard" sx={{ width: '150px' }}>
//             <Select
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               input={<InputBase />}
//               sx={{
//                 backgroundColor: alt,
//                 borderRadius: '1rem',
//                 padding: '0.5rem 1rem',
//                 "& .MuiSvgIcon-root": {
//                   pr: "0.5rem",
//                   width: "1.5rem",
//                 },
//                 "& .MuiSelect-select:focus": {
//                   backgroundColor: alt,
//                 },
//               }}
//             >
//               <MenuItem value={fullName}>
//                 <Typography>{fullName}</Typography>
//               </MenuItem>
//               <MenuItem onClick={handleLogout}>
//                 <Typography>Logout</Typography>
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </CssMUI>
//       ) : (
//         // Mobile Menu Toggle
//         <IconButton onClick={handleToggleMobileMenu}>
//           <Menu sx={{ fontSize: '25px' }} />
//         </IconButton>
//       )}
//     </CssMUI>
//   );
// };

// export default Navigate;

import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <Link to='/' className='link'>theJobar
          <div className="brand">
            {/* <img src={logo} alt="logo" /> */}
          </div>
        </Link>
      </nav>
    </div>
  )
};

export default Navigate;
