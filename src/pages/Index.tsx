import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-heading text-foreground">
              Компания
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-6 leading-tight">
              Создаём ценность
              <br />
              для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Профессиональные решения для развития и роста компаний
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Наши услуги
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы — команда профессионалов с многолетним опытом работы на рынке. Наша миссия —
                помогать компаниям достигать их целей через инновационные решения и
                персонализированный подход.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                За годы работы мы успешно реализовали более 200 проектов для клиентов из различных
                отраслей, от стартапов до крупных корпораций.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {[
                { icon: 'Users', label: 'Опытная команда', value: '50+' },
                { icon: 'Award', label: 'Реализованных проектов', value: '200+' },
                { icon: 'TrendingUp', label: 'Рост клиентов', value: '95%' },
                { icon: 'Clock', label: 'Лет на рынке', value: '10+' },
              ].map((stat) => (
                <Card key={stat.label} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold font-heading text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Lightbulb',
                title: 'Консалтинг',
                description:
                  'Стратегическое планирование и экспертная поддержка для достижения бизнес-целей',
              },
              {
                icon: 'Code',
                title: 'Разработка',
                description:
                  'Создание современных цифровых решений с использованием передовых технологий',
              },
              {
                icon: 'BarChart',
                title: 'Аналитика',
                description:
                  'Глубокий анализ данных и бизнес-процессов для принятия обоснованных решений',
              },
              {
                icon: 'Rocket',
                title: 'Маркетинг',
                description:
                  'Эффективные стратегии продвижения и увеличения узнаваемости бренда',
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description:
                  'Защита данных и информационных систем от современных киберугроз',
              },
              {
                icon: 'Headphones',
                title: 'Поддержка',
                description:
                  'Круглосуточная техническая поддержка и сопровождение проектов',
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="border-0 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы обсудить ваш проект? Мы всегда на связи
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Mail',
                title: 'Email',
                value: 'info@company.ru',
                link: 'mailto:info@company.ru',
              },
              {
                icon: 'Phone',
                title: 'Телефон',
                value: '+7 (495) 123-45-67',
                link: 'tel:+74951234567',
              },
              {
                icon: 'MapPin',
                title: 'Адрес',
                value: 'Москва, ул. Примерная, д. 1',
                link: null,
              },
            ].map((contact) => (
              <Card
                key={contact.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow animate-scale-in"
              >
                <CardContent className="p-6 text-center">
                  <Icon name={contact.icon} className="mx-auto mb-3 text-primary" size={32} />
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {contact.title}
                  </div>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div className="text-foreground font-medium">{contact.value}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2026 Компания. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
