import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle user registration
    // For this example, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800">{t('signUp.title')}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">{t('signUp.name')}</label>
              <input
                type="text"
                placeholder={t('signUp.name')}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700" htmlFor="email">{t('signUp.email')}</label>
              <input
                type="email"
                placeholder={t('signUp.email')}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700" htmlFor="password">{t('signUp.password')}</label>
              <input
                type="password"
                placeholder={t('signUp.password')}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-900 flex items-center"
                type="submit"
              >
                <UserPlus className="mr-2" size={18} />
                {t('signUp.submit')}
              </button>
            </div>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link to="/signin" className="text-blue-600 hover:underline">
            {t('signUp.signInLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;