import {useState} from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		  Ana
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  
const defaultTheme = createTheme();
  

const LoginPage = (props) => {
	
	const [state,setState] = useState({
		username:"",
		password:""
	})
	
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			props.setError("Username must be atleast 4 and password 8 characters long.");
			return;
		}
		let user = {
			...state
		}
		if(event.target.name === "register") {
			props.register(user);
		} else {
			props.login(user);
		}
	}
	return (
		<ThemeProvider theme={defaultTheme}>
		  <Grid container component="main" sx={{ height: '100vh' }}>
			<CssBaseline />
			<Grid
			  item
			  xs={false}
			  sm={4}
			  md={7}
			  sx={{
				backgroundImage: 'url(https://www.wisconsincheeseman.com/dw/image/v2/BBVM_PRD/on/demandware.static/-/Sites-colony-master-catalog/default/dw8dc0ff6c/large/sub_18/013331.png?sw=1500&sh=1500&sm=fit)',
				backgroundRepeat: 'no-repeat',
				backgroundColor: (t) =>
				  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			  }}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			  <Box
				sx={{
				  my: 8,
				  mx: 4,
				  display: 'flex',
				  flexDirection: 'column',
				  alignItems: 'center',
				}}
			  >
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				  <LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
				  Sous Vide
				</Typography>
				<Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
				  <TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					onChange={onChange}
					autoFocus
					value={state.username}
				  />
				  <TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					onChange={onChange}
					value={state.password}
				  />
				  <Button
					name ="login"
					onClick={onSubmit}
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				  >
					Login
				  </Button>
				  <Button
					name="register"
					onClick={onSubmit}
					fullWidth
					variant="contained"
					sx={{ mt: 0, mb: 2 }}
				  >
					Register
				  </Button>
				  <Grid container>
					<Grid item xs>
					</Grid>
					<Grid item>
					</Grid>
				  </Grid>
				  <Copyright sx={{ mt: 5 }} />
				</Box>
			  </Box>
			</Grid>
		  </Grid>
		</ThemeProvider>
	  );
}

export default LoginPage;