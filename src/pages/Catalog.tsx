import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Fish, Search, Filter, ShoppingCart } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    { id: 1, name: 'Лосось атлантический', price: 890, category: 'red-fish', image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 2, name: 'Треска свежая', price: 450, category: 'white-fish', image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 3, name: 'Креветки королевские', price: 1200, category: 'seafood', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 4, name: 'Икра красная', price: 2500, category: 'caviar', image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: false },
    { id: 5, name: 'Семга слабосоленая', price: 1200, category: 'red-fish', image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 6, name: 'Судак филе', price: 380, category: 'white-fish', image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 7, name: 'Мидии в раковинах', price: 650, category: 'seafood', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
    { id: 8, name: 'Икра черная', price: 4500, category: 'caviar', image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'red-fish', label: 'Красная рыба' },
    { value: 'white-fish', label: 'Белая рыба' },
    { value: 'seafood', label: 'Морепродукты' },
    { value: 'caviar', label: 'Икра и деликатесы' },
  ];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">РыбаМаркет</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Главная</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">О нас</Link>
              <Link to="/delivery" className="text-gray-600 hover:text-blue-600">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600">Контакты</Link>
            </nav>
            <Link to="/cart">
              <Button variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина (0)
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>

        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">По названию</SelectItem>
                <SelectItem value="price">По цене (возр.)</SelectItem>
                <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </div>

        {/* Товары */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={product.inStock ? "default" : "secondary"}>
                    {product.inStock ? "В наличии" : "Нет в наличии"}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-xl font-bold text-blue-600 mb-4">
                  {product.price} ₽/кг
                </CardDescription>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    disabled={!product.inStock}
                  >
                    В корзину
                  </Button>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Товары не найдены</p>
            <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;