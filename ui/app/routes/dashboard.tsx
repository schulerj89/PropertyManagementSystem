// app/routes/dashboard.tsx
import React from 'react';
import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Loader function to protect the route
export const loader = async ({ request }) => {
  const cookie = request.headers.get('Cookie');
  const token = cookie?.split('token=')[1];

  if (!token) {
    return redirect('/login');
  }

  const response = await fetch('http://localhost:8000/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return redirect('/login');
  }

  const user = await response.json();
  return json(user);
};

export default function Dashboard() {
  const user = useLoaderData();

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}
