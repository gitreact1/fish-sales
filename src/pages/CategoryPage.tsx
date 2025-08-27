import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Fish, Search, Filter } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const categoryInfo = {
    'красная-рыба': {
      title: 'Красная рыба',
      description: 'Лучшая красная рыба от проверенных поставщиков',
      products: [
        { id: 1, name: 'Лосось атлантический', price: 890, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 5, name: 'Семга слабосоленая', price: 1200, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 9, name: 'Форель радужная', price: 650, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 10, name: 'Горбуша свежая', price: 420, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: false },
      ]
    },
    'белая-рыба': {
      title: 'Белая рыба',
      description: 'Свежая белая рыба высшего качества',
      products: [
        { id: 2, name: 'Треска свежая', price: 450, image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 6, name: 'Судак филе', price: 380, image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 11, name: 'Палтус стейк', price: 890, image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 12, name: 'Камбала целая', price: 320, image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
      ]
    },
    'морепродукты': {
      title: 'Морепродукты',
      description: 'Свежие морепродукты со всего мира',
      products: [
        { id: 3, name: 'Креветки королевские', price: 1200, image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 7, name: 'Мидии в раковинах', price: 650, image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 13, name: 'Кальмары тушки', price: 480, image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 14, name: 'Гребешки морские', price: 1800, image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: false },
      ]
    },
    'икра-и-деликатесы': {
      title: 'Икра и деликатесы',
      description: 'Изысканные деликатесы для особых случаев',
      products: [
        { id: 4, name: 'Икра красная', price: 2500, image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: false },
        { id: 8, name: 'Икра черная', price: 4500, image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 15, name: 'Икра щучья', price: 890, image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
        { id: 16, name: 'Балык осетровый', price: 3200, image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', inStock: true },
      ]
    }
  };

  const currentCategory = categoryInfo[category as keyof typeof categoryInfo];

  if (!currentCategory) {
    return <div>Категория не найдена</div>;
  }

  const filteredProducts = currentCategory.products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Link to="/catalog" className="text-gray-600 hover:text-blue-600">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-blue-600">Главная</Link></li>
            <li>/</li>
            <li><Link to="/catalog" className="hover:text-blue-600">Каталог</Link></li>
            <li>/</li>
            <li className="text-gray-900">{currentCategory.title}</li>
          </ol>
        </nav>

        {/* Заголовок категории */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{currentCategory.title}</h1>
          <p className="text-gray-600 text-lg">{currentCategory.description}</p>
        </div>

        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск в категории..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
              Дополнительные фильтры
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

        {/* Информация о категории */}
        <section className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">О категории "{currentCategory.title}"</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Особенности</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Только свежая продукция от проверенных поставщиков</li>
                <li>• Строгий контроль качества на всех этапах</li>
                <li>• Соблюдение температурного режима при транспортировке</li>
                <li>• Гарантия свежести и возврат в случае несоответствия</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Рекомендации по хранению</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Храните в холодильнике при температуре 0°C до +2°C</li>
                <li>• Используйте в течение указанного срока годности</li>
                <li>• Не замораживайте повторно размороженную продукцию</li>
                <li>• Храните в оригинальной упаковке или герметичном контейнере</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;