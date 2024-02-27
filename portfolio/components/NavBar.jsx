import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

// Importaciones para el logo
import logo from "../src/assets/logo_Portfolio.png";
import "../styles/NavBar.css";

// Importaciones para el toggle switch
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Color, { useState, useMemo, useContext, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useMediaQuery } from "@mui/material";
const ColorModeContext = Color.createContext({ toggleColorMode: () => {} });

const pages = ["Sobre Mi", "Proyectos", "Contacto"];
const settings = [<ColorSwitch />, "Account"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img src={logo} className="Logo" />
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img src={logo} className="Logo" />
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<SettingsIcon
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							></SettingsIcon>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

function ColorSwitch() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "background.default",
				color: "text.primary",
				borderRadius: 1,
				p: 3,
			}}
		>
			{theme.palette.mode} mode
			<IconButton
				sx={{ ml: 1 }}
				onClick={colorMode.toggleColorMode}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
}

export function ToggleColorMode() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	useEffect(() => {
		if (prefersDarkMode && mode === "light") {
			setMode("dark");
		}
	}, [prefersDarkMode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<ResponsiveAppBar />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default ToggleColorMode;
