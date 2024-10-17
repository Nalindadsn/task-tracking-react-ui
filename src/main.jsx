import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';

import HomePage from "./pages/HomePage";
import TrackingPage from './pages/TrackingPage.jsx';
import TasksPage from './pages/TasksPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App />}>
      {/* <Route index={true} path='/' element={<HomeScreen />} /> */}
      
      
      <Route
              path="/"
               index={true} 
              element={
                // <ProtectedRoute>
                  <HomePage />
              }
            />
          




          <Route path='/list-tasks' element={<TasksPage />} />
          <Route path='/list-tasks/:id' element={<TrackingPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
