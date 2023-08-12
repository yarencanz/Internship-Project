import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import {AuthProvider, useAuth} from "./auth/AuthProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

const ProtectedRoute = ({children}) => {
    const {user} = useAuth()
    if(!user){
        return <Navigate to='/'/>
    }

    return children
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path:'/feed',
    element:<ProtectedRoute><HomePage/></ProtectedRoute>
  },
  {
    path:'/profile',
    element:<ProtectedRoute><ProfilePage/></ProtectedRoute>
  }
]);

function App() {
  return (
      <AuthProvider>
    <RouterProvider router={router} />
      </AuthProvider>
  )
}



export default App
