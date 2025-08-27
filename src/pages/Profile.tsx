import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Fish, User, Package, MapPin, CreditCard, Settings } from 'lucide-react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phone: '+7 (495) 123-45-67',
    birthDate: '1985-06-15'
  });

  const orders = [
    { id: '12345', date: '2024-12-10', status: 'Доставлен', total: 2890, items: 3 },
    { id: '12344', date: '2024-12-05', status: 'В пути', total: 1450, items: 2 },
    { id: '12343', date: '2024-11-28', status: 'Доставлен', total: 3200, items: 5 },
  ];

  const addresses = [
    { id: 1, title: 'Дом', address: 'г. Москва, ул. Ленина, д. 10, кв. 25', isDefault: true },
    { id: 2, title: 'Офис', address: 'г. Москва, ул. Тверская, д. 5, оф. 301', isDefault: false },
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', userInfo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
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
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{userInfo.firstName} {userInfo.lastName}</h1>
            <p className="text-gray-600">Клиент с ноября 2023</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="addresses">Адреса</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          {/* Профиль */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input
                        name="firstName"
                        value={userInfo.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Фамилия</label>
                      <Input
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата рождения</label>
                    <Input
                      name="birthDate"
                      type="date"
                      value={userInfo.birthDate}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit">Сохранить изменения</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Заказы */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-2" />
                  История заказов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Заказ #{order.id}</h3>
                          <p className="text-gray-600 text-sm">{order.date}</p>
                        </div>
                        <Badge variant={order.status === 'Доставлен' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">{order.items} товара</p>
                        <p className="font-semibold">{order.total} ₽</p>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">Подробнее</Button>
                        {order.status === 'Доставлен' && (
                          <Button variant="outline" size="sm">Повторить заказ</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Адреса */}
          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    Адреса доставки
                  </div>
                  <Button>Добавить адрес</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="font-semibold mr-2">{address.title}</h3>
                            {address.isDefault && (
                              <Badge variant="outline">По умолчанию</Badge>
                            )}
                          </div>
                          <p className="text-gray-600">{address.address}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Изменить</Button>
                          <Button variant="outline" size="sm">Удалить</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Настройки */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-6 w-6 mr-2" />
                    Уведомления
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email уведомления</p>
                        <p className="text-sm text-gray-600">Получать уведомления о заказах на email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS уведомления</p>
                        <p className="text-sm text-gray-600">Получать SMS о статусе доставки</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Рекламные рассылки</p>
                        <p className="text-sm text-gray-600">Получать информацию о скидках и акциях</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline">Изменить пароль</Button>
                    <Button variant="outline">Настроить двухфакторную аутентификацию</Button>
                    <Button variant="destructive">Удалить аккаунт</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;