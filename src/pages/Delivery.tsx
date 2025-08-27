import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fish, Truck, Clock, MapPin, Package, Thermometer } from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центр Москвы', time: '2-4 часа', price: 'Бесплатно от 3000 ₽' },
    { zone: 'Москва в пределах МКАД', time: '4-6 часов', price: '300 ₽' },
    { zone: 'Московская область', time: '1-2 дня', price: '500 ₽' },
    { zone: 'Регионы России', time: '2-5 дней', price: 'от 800 ₽' },
  ];

  const deliveryMethods = [
    {
      title: 'Курьерская доставка',
      description: 'Доставка курьером до двери',
      time: '2-6 часов',
      price: 'от 300 ₽',
      icon: <Truck className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Самовывоз',
      description: 'Забрать заказ из магазина',
      time: 'В любое время',
      price: 'Бесплатно',
      icon: <MapPin className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Экспресс-доставка',
      description: 'Срочная доставка в течение 2 часов',
      time: '1-2 часа',
      price: 'от 800 ₽',
      icon: <Clock className="h-8 w-8 text-blue-600" />
    }
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
        <h1 className="text-3xl font-bold mb-8">Доставка и самовывоз</h1>

        {/* Способы доставки */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Способы доставки</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Время:</span>
                      <Badge variant="outline">{method.time}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Стоимость:</span>
                      <Badge>{method.price}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Зоны доставки */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Зоны доставки</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Зона доставки
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Время доставки
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Стоимость
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deliveryZones.map((zone, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {zone.zone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {zone.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {zone.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Условия доставки */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Условия доставки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-2 text-blue-600" />
                  Упаковка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Специальная термоупаковка для сохранения свежести</li>
                  <li>• Использование сухого льда для заморозки</li>
                  <li>• Герметичная упаковка для предотвращения протечек</li>
                  <li>• Экологически чистые материалы</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="h-6 w-6 mr-2 text-blue-600" />
                  Температурный режим
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Свежая рыба: 0°C до +2°C</li>
                  <li>• Замороженная продукция: -18°C</li>
                  <li>• Икра и деликатесы: 0°C до +4°C</li>
                  <li>• Контроль температуры на всех этапах</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Важная информация */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Важная информация</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Обратите внимание:</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Минимальная сумма заказа для доставки — 1500 ₽</li>
              <li>• Бесплатная доставка при заказе от 3000 ₽ в пределах МКАД</li>
              <li>• Доставка осуществляется с 9:00 до 21:00</li>
              <li>• Возможна доставка в выходные и праздничные дни</li>
              <li>• При получении обязательно проверьте целостность упаковки</li>
              <li>• Оплата возможна наличными или картой курьеру</li>
            </ul>
          </div>
        </section>

        {/* Самовывоз */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Самовывоз</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Адрес магазина</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">РыбаМаркет</p>
                    <p className="text-gray-600">г. Москва, ул. Рыбная, д. 15</p>
                    <p className="text-gray-600">ТЦ "Морской", 2 этаж</p>
                  </div>
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Как забрать заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Оформите заказ на сайте или по телефону</li>
                  <li>2. Дождитесь SMS с подтверждением готовности</li>
                  <li>3. Приезжайте в магазин с документом</li>
                  <li>4. Назовите номер заказа или телефон</li>
                  <li>5. Проверьте заказ и произведите оплату</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Контакты для вопросов */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Вопросы по доставке?</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Если у вас есть вопросы по доставке или вы хотите уточнить детали заказа, 
                свяжитесь с нашей службой поддержки:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold">Телефон:</p>
                  <p className="text-blue-600">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-blue-600">delivery@rybamarket.ru</p>
                </div>
                <div>
                  <p className="font-semibold">Время работы:</p>
                  <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Delivery;