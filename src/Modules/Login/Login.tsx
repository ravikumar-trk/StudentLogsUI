import { CheckValidUserService } from '../../Services/GeneralServices.service';
import { ILoginEntity, IStickyEntity, IStickyData } from '../General/GeneralUtils';
import { ToastMessage } from '../../Common/Components/ToastMessage';
import { useContext, useState } from 'react';
import { Context } from '../../App';
import { ILoginData } from '../../Common/Store/ContaxtStore';

// const Login = () => {
//     const [IStickyEntity, setIStickyEntity] = useState<IStickyEntity>(IStickyData);
//     const [context, setContext] = useContext<any>(Context);
//     const handleSubmit = async (event: any) => {
//         //debugger
//         event.preventDefault()
//         var username = event.currentTarget.elements.Username.value;
//         var Password = event.currentTarget.elements.Password.value;
//         if (username === "" || username === null || username === undefined) {
//             setIStickyEntity(prevState => ({
//                 ...prevState,
//                 ID: 0,
//                 Type: 0,
//                 Message: 'Please enter username',
//                 Time: 3000,
//                 ShowToast: true
//             }));
//             return false;
//         }
//         if (Password === "" || Password === null || Password === undefined) {
//             setIStickyEntity(prevState => ({
//                 ...prevState,
//                 ID: 0,
//                 Type: 0,
//                 Message: 'Please enter password',
//                 Time: 3000,
//                 ShowToast: true
//             }));
//             return false;
//         }
//         let LoginEntity: ILoginEntity = {
//             EMail: username,
//             Password: Password
//         }
//         setContext((prevState: any) => ({
//             ...prevState,
//             Spin: true
//         }));
//         const res: any = await CheckValidUserService(LoginEntity);
//         //debugger
//         setContext((prevState: any) => ({
//             ...prevState,
//             Spin: false
//         }));
//         if (res.status === 200) {
//             var Type = res.data[0].Type;
//             var Message = res.data[0].Message;
//             setIStickyEntity(prevState => ({
//                 ...prevState,
//                 Type: Type,
//                 Message: Message,
//                 Time: 3000,
//                 ShowToast: true
//             }));
//             if (Type === 1) {
//                 var UserData = {
//                     LoginUserID: res.data[0].UserID,
//                     LoginUserName: res.data[0].UserName,
//                     LoginAccountID: res.data[0].AccountID,
//                     LoginUserTypeID: res.data[0].UserTypeID,
//                     Spin: false
//                 }
//                 setContext(UserData);
//                 sessionStorage.setItem('UserData', JSON.stringify(UserData));
//             }
//         }
//         else if (res.message !== "") {
//             setIStickyEntity(prevState => ({
//                 ...prevState,
//                 ID: 0,
//                 Type: 0, // Error
//                 Message: res.message,
//                 Time: 3000,
//                 ShowToast: true
//             }));
//         }
//     }
//     return (
//         <div className="login-body">
//             {
//                 IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>
//             }
//             <div className="login-page">
//                 <form className="form" onSubmit={handleSubmit}>
//                     <div className="login-input">
//                         <input
//                             type="text"
//                             name="Username"
//                             placeholder="Username"
//                         />
//                         <UserOutlined />
//                     </div>
//                     <div className="login-input">
//                         <input
//                             type="password"
//                             name="Password"
//                             placeholder="Pssword"
//                         />
//                         <UnlockOutlined />
//                     </div>
//                     <div>
//                         <input type="submit" value="login" />
//                         <p className="message">Not registered? <a href="#">Create an account</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Login;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                TRK.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
    const [IStickyEntity, setIStickyEntity] = useState<IStickyEntity>(IStickyData);
    const [context, setContext] = useContext<any>(Context);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        debugger
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var email = data.get('email');
        var Password = data.get('password');
        if (email === "" || email === null || email === undefined) {
            setIStickyEntity(prevState => ({
                ...prevState,
                ID: 0,
                Type: 0,
                Message: 'Please enter email',
                Time: 3000,
                ShowToast: true
            }));
            return false;
        }
        if (Password === "" || Password === null || Password === undefined) {
            setIStickyEntity(prevState => ({
                ...prevState,
                ID: 0,
                Type: 0,
                Message: 'Please enter password',
                Time: 3000,
                ShowToast: true
            }));
            return false;
        }
        let LoginEntity = {
            EMail: email,
            Password: Password
        }
        setContext((prevState: any) => ({
            ...prevState,
            Spin: true
        }));
        const res: any = await CheckValidUserService(LoginEntity);
        //debugger
        setContext((prevState: any) => ({
            ...prevState,
            Spin: false
        }));
        if (res.status === 200) {
            var Type = res.data[0].Type;
            var Message = res.data[0].Message;
            setIStickyEntity(prevState => ({
                ...prevState,
                Type: Type,
                Message: Message,
                Time: 3000,
                ShowToast: true
            }));
            if (Type === 1) {
                var UserData = {
                    LoginUserID: res.data[0].UserID,
                    LoginUserName: res.data[0].UserName,
                    LoginAccountID: res.data[0].AccountID,
                    LoginUserTypeID: res.data[0].UserTypeID,
                    Spin: false
                }
                setContext(UserData);
                sessionStorage.setItem('UserData', JSON.stringify(UserData));
            }
        }
        else if (res.message !== "") {
            setIStickyEntity(prevState => ({
                ...prevState,
                ID: 0,
                Type: 0, // Error
                Message: res.message,
                Time: 3000,
                ShowToast: true
            }));
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            {
                IStickyEntity.ShowToast ? <ToastMessage data={IStickyEntity} /> : <></>
            }
            <Container component="main" maxWidth="xs">
                {/* <CssBaseline /> */}
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 6, mb: 0 }} />
            </Container>
        </ThemeProvider>
    );
}