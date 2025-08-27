import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Fish, Users, Award, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Александр Петров', position: 'Генеральный директор', experience: '15 лет в рыбной отрасли' },
    { name: 'Мария Иванова', position: 'Директор по качеству', experience: '12 лет контроля качества' },
    { name: 'Сергей Козлов', position: 'Руководитель закупок', experience: '10 лет работы с поставщиками' },
    { name: 'Елена Смирнова', position: 'Менеджер по логистике', experience: '8 лет в логистике' },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Качество',
      description: 'Строгий контроль качества на всех этапах от поставки до доставки клиенту'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Забота о клиентах',
      description: 'Индивидуальный подход к каждому клиенту и решение любых вопросов'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Надежность',
      description: 'Стабильные поставки и соблюдение всех договоренностей'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Профессионализм',
      description: 'Высокая квалификация сотрудников и постоянное развитие'
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
              <Link to="/delivery" className="text-gray-600 hover:text-blue-600">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-blue-600">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">О компании РыбаМаркет</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы — ведущий поставщик свежей рыбы и морепродуктов в России. 
            Уже более 15 лет обеспечиваем наших клиентов качественной продукцией 
            прямо от производителей.
          </p>
        </div>
      </section>

      {/* История компании */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания РыбаМаркет была основана в 2009 году группой энтузиастов, 
                  которые хотели сделать качественную рыбную продукцию доступной 
                  для каждого покупателя.
                </p>
                <p>
                  Начав с небольшого магазина в Москве, мы постепенно расширили 
                  географию поставок и сегодня работаем с лучшими рыболовецкими 
                  хозяйствами по всей России.
                </p>
                <p>
                  За годы работы мы обслужили более 50 000 клиентов и стали 
                  одним из крупнейших поставщиков рыбной продукции в регионе.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="История компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">лет успешной работы</p>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">регионов доставки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и лицензии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">ISO 22000</h3>
                <p className="text-gray-600">
                  Система менеджмента безопасности пищевых продуктов
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">HACCP</h3>
                <p className="text-gray-600">
                  Анализ рисков и критические контрольные точки
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Росрыболовство</h3>
                <p className="text-gray-600">
                  Лицензия на торговлю рыбной продукцией
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы стать нашим клиентом?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые доверяют нам 
            поставку качественной рыбной продукции.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Смотреть каталог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;