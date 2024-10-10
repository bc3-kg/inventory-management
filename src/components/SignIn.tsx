import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800">{t('signIn.title')}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder={t('signIn.email')}
                className="w-full pl-10 pr-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mt-4">
              <Lock className="absolute top-3 left-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder={t('signIn.password')}
                className="w-full pl-10 pr-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 flex items-center"
                type="submit"
              >
                <LogIn className="mr-2" size={18} />
                {t('signIn.submit')}
              </button>
            </div>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link to="/signup" className="text-blue-600 hover:underline">
            {t('signIn.signUpLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;