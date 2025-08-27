import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fish, Truck, Shield, Star, Clock, MapPin, Phone, Mail, Users, Award } from 'lucide-react';

const Index = () => {
  const featuredProducts = [
    { id: 1, name: 'Лосось атлантический', price: '890 ₽/кг', image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Красная рыба' },
    { id: 2, name: 'Треска свежая', price: '450 ₽/кг', image: 'https://images.pexels.com/photos/1516909/pexels-photo-1516909.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Белая рыба' },
    { id: 3, name: 'Креветки королевские', price: '1200 ₽/кг', image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Морепродукты' },
    { id: 4, name: 'Икра красная', price: '2500 ₽/банка', image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Деликатесы' }
  ];

  const categories = [
    { name: 'Красная рыба', count: 15, icon: '🐟' },
    { name: 'Белая рыба', count: 22, icon: '🐠' },
    { name: 'Морепродукты', count: 18, icon: '🦐' },
    { name: 'Икра и деликатесы', count: 8, icon: '🥄' },
    { name: 'Копченая рыба', count: 12, icon: '🔥' },
    { name: 'Консервы', count: 25, icon: '🥫' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">РыбаМаркет</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-600 hover:text-blue-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm">Корзина (0)</Button>
              </Link>
              <Link to="/login">
                <Button size="sm">Войти</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Свежая рыба и морепродукты</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Прямые поставки от производителей. Гарантия качества и свежести. 
            Доставка по всей России в течение 24 часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Смотреть каталог
              </Button>
            </Link>
            <Link to="/delivery">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Узнать о доставке
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 информационных разделов */}
      
      {/* 1. Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">Все товары проходят строгий контроль качества</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">Доставка в день заказа по Москве</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Свежесть</h4>
              <p className="text-gray-600">Ежедневные поставки свежей продукции</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Лучшие цены</h4>
              <p className="text-gray-600">Прямые поставки без посредников</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Популярные товары */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные товары</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-blue-600">
                    {product.price}
                  </CardDescription>
                  <Button className="w-full mt-4">В корзину</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalog">
              <Button variant="outline" size="lg">Смотреть все товары</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Категории товаров */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Категории товаров</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h4 className="font-semibold mb-2">{category.name}</h4>
                    <p className="text-sm text-gray-600">{category.count} товаров</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. О компании */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">О компании РыбаМаркет</h3>
              <p className="text-gray-700 mb-4">
                Уже более 15 лет мы занимаемся поставками свежей рыбы и морепродуктов. 
                Наша компания работает напрямую с рыболовецкими хозяйствами и 
                аквакультурными предприятиями.
              </p>
              <p className="text-gray-700 mb-6">
                Мы гарантируем высочайшее качество продукции и соблюдение всех 
                санитарных норм при транспортировке и хранении.
              </p>
              <Link to="/about">
                <Button>Подробнее о нас</Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="О компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Статистика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Наши достижения</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">лет на рынке</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">видов продукции</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Доставка и оплата */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Доставка и оплата</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-6 w-6 mr-2 text-blue-600" />
                  Способы доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Курьерская доставка по Москве - от 300 ₽</li>
                  <li>• Самовывоз из магазина - бесплатно</li>
                  <li>• Доставка по России - от 500 ₽</li>
                  <li>• Экспресс-доставка - от 800 ₽</li>
                </ul>
                <Link to="/delivery" className="inline-block mt-4">
                  <Button variant="outline">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-600" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Банковские карты Visa/MasterCard</li>
                  <li>• Наличными курьеру</li>
                  <li>• Банковский перевод</li>
                  <li>• Электронные кошельки</li>
                </ul>
                <Link to="/payment" className="inline-block mt-4">
                  <Button variant="outline">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Отзывы клиентов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличное качество рыбы! Заказываю уже полгода, всегда свежая продукция. 
                  Доставка быстрая, упаковка надежная."
                </p>
                <p className="font-semibold">Анна К.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Прекрасный сервис! Консультанты помогли выбрать рыбу для праздничного стола. 
                  Гости были в восторге!"
                </p>
                <p className="font-semibold">Михаил П.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Лучший магазин морепродуктов в городе! Цены адекватные, 
                  качество на высоте. Рекомендую всем!"
                </p>
                <p className="font-semibold">Елена С.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline">Все отзывы</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Новости и акции */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Новости и акции</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Акция</Badge>
                <CardTitle>Скидка 20% на красную рыбу</CardTitle>
                <CardDescription>15 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Специальное предложение на всю красную рыбу до конца месяца. 
                  Успейте воспользоваться выгодным предложением!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Новость</Badge>
                <CardTitle>Новые поставщики из Мурманска</CardTitle>
                <CardDescription>10 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Мы расширили географию поставок и теперь работаем с лучшими 
                  рыболовецкими хозяйствами Мурманска.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">Событие</Badge>
                <CardTitle>Открытие нового склада</CardTitle>
                <CardDescription>5 декабря 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Открыли новый современный склад с улучшенными условиями 
                  хранения для обеспечения максимальной свежести продукции.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/news">
              <Button variant="outline">Все новости</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Партнеры */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Наши партнеры</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Поставщики</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Мурманский рыбокомбинат</p>
                    <p className="text-sm text-gray-600">Поставки северной рыбы</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Камчатские морепродукты</p>
                    <p className="text-sm text-gray-600">Красная икра и лосось</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Астраханская рыба</p>
                    <p className="text-sm text-gray-600">Осетровые и черная икра</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Сертификаты</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">ISO 22000</p>
                    <p className="text-sm text-gray-600">Система менеджмента безопасности пищевых продуктов</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">HACCP</p>
                    <p className="text-sm text-gray-600">Анализ рисков и критические контрольные точки</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Росрыболовство</p>
                    <p className="text-sm text-gray-600">Лицензия на торговлю рыбной продукцией</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Контакты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-gray-700">
                  г. Москва, ул. Рыбная, д. 15<br />
                  ТЦ "Морской", 2 этаж
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-700">
                  +7 (495) 123-45-67<br />
                  +7 (800) 555-66-77
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-700">
                  info@rybamarket.ru<br />
                  orders@rybamarket.ru
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/contacts">
              <Button size="lg">Написать нам</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-6 w-6" />
                <h4 className="text-lg font-semibold">РыбаМаркет</h4>
              </div>
              <p className="text-gray-400">
                Лучшая рыба и морепродукты с доставкой по всей России
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/catalog/red-fish" className="hover:text-white">Красная рыба</Link></li>
                <li><Link to="/catalog/white-fish" className="hover:text-white">Белая рыба</Link></li>
                <li><Link to="/catalog/seafood" className="hover:text-white">Морепродукты</Link></li>
                <li><Link to="/catalog/caviar" className="hover:text-white">Икра</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">О компании</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/payment" className="hover:text-white">Оплата</Link></li>
                <li><Link to="/warranty" className="hover:text-white">Гарантии</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@rybamarket.ru</li>
                <li>г. Москва, ул. Рыбная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РыбаМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;