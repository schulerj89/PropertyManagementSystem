// app/routes/login.tsx
import React, { useState } from 'react';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Action function to handle the form submission
export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });


  if (!response.ok) {
    return json({ error: 'Invalid credentials' }, { status: 400 });
  }

  const data = await response.json();
  const token = data.token;

  // Save the token in a cookie or any other storage
  // Here we are using the redirect with a cookie
  return redirect('/dashboard', {
    headers: {
      'Set-Cookie': `token=${token}; HttpOnly; Path=/`,
    },
  });
};

export default function LoginPage() {
  const actionData = useActionData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form method="post">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {actionData?.error && (
            <Typography color="error" variant="body2">
              {actionData.error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Form>
      </Paper>
    </Box>
  );
}
