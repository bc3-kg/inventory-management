import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Receiving from './components/Receiving';
import Shipping from './components/Shipping';

function App() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : i18n.language === 'es' ? 'ja' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {i18n.language === 'en' ? 'ES' : i18n.language === 'es' ? 'JA' : 'EN'}
          </button>
        </div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/receiving" element={<Receiving />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;