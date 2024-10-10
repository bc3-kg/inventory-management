import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Package, Tag } from 'lucide-react';

const Receiving: React.FC = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  const [sku, setSku] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ date, sku, productName, quantity, tags });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">{t('receiving.title')}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Package className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={t('receiving.sku')}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder={t('receiving.productName')}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder={t('receiving.quantity')}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="relative md:col-span-2">
            <Tag className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={t('receiving.tags')}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
          >
            {t('receiving.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Receiving;