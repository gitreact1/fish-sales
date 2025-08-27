import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Fish, Star, Minus, Plus, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Мок данные товара
  const product = {
    id: 1,
    name: 'Лосось атлантический',
    price: 890,
    oldPrice: 1200,
    category: 'Красная рыба',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    description: 'Свежий атлантический лосось высшего качества. Выловлен в экологически чистых водах Норвегии. Богат омега-3 жирными кислотами и белком.',
    images: [
      'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    specifications: {
      'Страна происхождения': 'Норвегия',
      'Способ обработки': 'Свежий',
      'Срок годности': '5 дней',
      'Условия хранения': '0°C до +2°C',
      'Пищевая ценность на 100г': 'Белки: 20г, Жиры: 13г, Углеводы: 0г',
      'Калорийность': '208 ккал'
    }
  };

  const reviews = [
    { id: 1, author: 'Анна К.', rating: 5, date: '2024-12-10', text: 'Отличная рыба! Очень свежая, без запаха. Готовила на гриле - получилось превосходно!' },
    { id: 2, author: 'Михаил П.', rating: 5, date: '2024-12-08', text: 'Заказываю уже не первый раз. Качество стабильно высокое, доставка быстрая.' },
    { id: 3, author: 'Елена С.', rating: 4, date: '2024-12-05', text: 'Хорошая рыба, но цена немного высоковата. В целом рекомендую.' }
  ];

  const relatedProducts = [
    { id: 2, name: 'Семга слабосоленая', price: 1200, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Форель радужная', price: 650, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Горбуша свежая', price: 420, image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

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
            <li><Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-blue-600">{product.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Изображения */}
          <div>
            <div className="mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="mb-4">
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} отзывов)
                  </span>
                </div>
                <Badge variant={product.inStock ? "default" : "secondary"}>
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </Badge>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-blue-600">{product.price} ₽/кг</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.oldPrice} ₽/кг</span>
                )}
              </div>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-medium">Количество:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 border rounded">{quantity} кг</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-lg font-semibold">
                Итого: {product.price * quantity} ₽
              </p>
            </div>

            <div className="flex space-x-4 mb-6">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                В корзину
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm text-gray-600">
              <p>• Доставка по Москве в день заказа</p>
              <p>• Гарантия свежести</p>
              <p>• Возврат в течение 24 часов</p>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList>
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specifications">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Описание товара</h3>
                <p className="text-gray-700 mb-4">
                  {product.description} Наш лосось поставляется напрямую от норвежских производителей, 
                  что гарантирует максимальную свежесть и качество продукта.
                </p>
                <p className="text-gray-700 mb-4">
                  Лосось богат омега-3 жирными кислотами, которые необходимы для здоровья сердца и мозга. 
                  Также содержит высококачественный белок, витамины D и B12, селен и другие полезные вещества.
                </p>
                <p className="text-gray-700">
                  Идеально подходит для приготовления на гриле, запекания в духовке, жарки на сковороде 
                  или приготовления суши и сашими.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Отзывы покупателей</h3>
                  <Button>Написать отзыв</Button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.author}</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Похожие товары */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                  <p className="text-xl font-bold text-blue-600 mb-4">{item.price} ₽/кг</p>
                  <Button className="w-full">В корзину</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;