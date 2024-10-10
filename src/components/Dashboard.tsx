import React from 'react';
import { Package, TruckIcon, BarChart2 } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Inventory Days',
        data: [12, 15, 13, 14, 16, 17, 15],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Lead Time (days)',
        data: [5, 6, 5, 7, 6, 5, 6],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('dashboard.inventoryTrends'),
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">{t('dashboard.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link to="/receiving" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Package className="text-blue-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">{t('dashboard.inboundShipments')}</h2>
          </div>
          <p className="text-4xl font-bold text-gray-800">1,234</p>
        </Link>
        <Link to="/shipping" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <TruckIcon className="text-green-500 mr-2" size={24} />
            <h2 className="text-xl font-semibold">{t('dashboard.outboundShipments')}</h2>
          </div>
          <p className="text-4xl font-bold text-gray-800">5,678</p>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <BarChart2 className="text-purple-500 mr-2" size={24} />
          <h2 className="text-xl font-semibold">{t('dashboard.inventoryTrends')}</h2>
        </div>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;