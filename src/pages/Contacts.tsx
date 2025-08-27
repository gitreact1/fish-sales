import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Fish, MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link to="/delivery" className="text-gray-600 hover:text-blue-600">Доставка</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Контакты</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Адрес магазина</h3>
                      <p className="text-gray-700">
                        г. Москва, ул. Рыбная, д. 15<br />
                        ТЦ "Морской", 2 этаж
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Телефоны</h3>
                      <p className="text-gray-700">
                        +7 (495) 123-45-67 — основной<br />
                        +7 (800) 555-66-77 — бесплатный
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-700">
                        info@rybamarket.ru — общие вопросы<br />
                        orders@rybamarket.ru — заказы
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Режим работы</h3>
                      <p className="text-gray-700">
                        Понедельник - Воскресенье: 9:00 - 21:00<br />
                        Без выходных и праздников
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Социальные сети */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">ВКонтакте</Button>
                <Button variant="outline" size="sm">Telegram</Button>
                <Button variant="outline" size="sm">WhatsApp</Button>
                <Button variant="outline" size="sm">Instagram</Button>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Тема обращения
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Кратко опишите суть вопроса"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Подробно опишите ваш вопрос или предложение"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Карта */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p>Здесь будет интерактивная карта</p>
                  <p className="text-sm">г. Москва, ул. Рыбная, д. 15</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Дополнительная информация */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Полезная информация</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Как добраться</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">На метро:</p>
                    <p className="text-gray-700">Станция "Рыбная" (синяя ветка), выход №3</p>
                  </div>
                  <div>
                    <p className="font-semibold">На автобусе:</p>
                    <p className="text-gray-700">Маршруты: 15, 23, 45 до остановки "ТЦ Морской"</p>
                  </div>
                  <div>
                    <p className="font-semibold">На автомобиле:</p>
                    <p className="text-gray-700">Парковка бесплатная, 200 мест</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Можно ли заказать по телефону?</p>
                    <p className="text-gray-700 text-sm">Да, принимаем заказы круглосуточно</p>
                  </div>
                  <div>
                    <p className="font-semibold">Есть ли доставка в регионы?</p>
                    <p className="text-gray-700 text-sm">Доставляем по всей России</p>
                  </div>
                  <div>
                    <p className="font-semibold">Как оплатить заказ?</p>
                    <p className="text-gray-700 text-sm">Наличными, картой или онлайн</p>
                  </div>
                </div>
                <Link to="/faq" className="inline-block mt-4">
                  <Button variant="outline" size="sm">Все вопросы</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;