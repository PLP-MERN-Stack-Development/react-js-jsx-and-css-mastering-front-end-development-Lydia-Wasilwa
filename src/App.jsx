import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */ <Navbar />}    
           
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              {/* Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR */}
            </p>
            
            {/* <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div> */}

            <p className="text-gray-500 dark:text-gray-400 mt-4">
            <TaskManager />

            </p>
          </div>
        </div>
        
        {/* API data display will go here */}        
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            {/* Fetch and display data from an API here */}
            <ApiData />
          </p>
        </div>
      </main>

      {<Footer/>/* Footer component will go here */}
      
    </div>
  );
}

export default App; 