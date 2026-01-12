import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const products: Product[] = [
    {
      id: 1,
      name: 'Миндаль',
      category: 'Орехи',
      price: 850,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/f87b50b5-0e12-4e4f-a663-068df705a447.jpg',
      description: 'Отборный калифорнийский миндаль высшего качества',
    },
    {
      id: 2,
      name: 'Грецкий орех',
      category: 'Орехи',
      price: 720,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/f87b50b5-0e12-4e4f-a663-068df705a447.jpg',
      description: 'Крупные ядра грецкого ореха, светлый сорт',
    },
    {
      id: 3,
      name: 'Кешью',
      category: 'Орехи',
      price: 920,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/f87b50b5-0e12-4e4f-a663-068df705a447.jpg',
      description: 'Нежный кешью премиум класса из Вьетнама',
    },
    {
      id: 4,
      name: 'Фундук',
      category: 'Орехи',
      price: 780,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/f87b50b5-0e12-4e4f-a663-068df705a447.jpg',
      description: 'Турецкий фундук крупного калибра',
    },
    {
      id: 5,
      name: 'Курага',
      category: 'Сухофрукты',
      price: 450,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/55a403ae-e5d4-4943-9180-542846bb6e15.jpg',
      description: 'Узбекская курага без консервантов',
    },
    {
      id: 6,
      name: 'Финики',
      category: 'Сухофрукты',
      price: 380,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/55a403ae-e5d4-4943-9180-542846bb6e15.jpg',
      description: 'Иранские финики Мазафати',
    },
    {
      id: 7,
      name: 'Изюм',
      category: 'Сухофрукты',
      price: 320,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/55a403ae-e5d4-4943-9180-542846bb6e15.jpg',
      description: 'Изюм без косточек, крупный',
    },
    {
      id: 8,
      name: 'Инжир',
      category: 'Сухофрукты',
      price: 520,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/55a403ae-e5d4-4943-9180-542846bb6e15.jpg',
      description: 'Вяленый инжир из Турции',
    },
    {
      id: 9,
      name: 'Начинка ореховая',
      category: 'Начинки',
      price: 650,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/8279677a-a39a-4d26-90d1-e366e1422d18.jpg',
      description: 'Готовая начинка для кондитерских изделий',
    },
    {
      id: 10,
      name: 'Начинка фруктовая',
      category: 'Начинки',
      price: 480,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/8279677a-a39a-4d26-90d1-e366e1422d18.jpg',
      description: 'Термостабильная начинка для выпечки',
    },
    {
      id: 11,
      name: 'Цукаты',
      category: 'Начинки',
      price: 420,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/8279677a-a39a-4d26-90d1-e366e1422d18.jpg',
      description: 'Цукаты для декорирования и добавок',
    },
    {
      id: 12,
      name: 'Шоколадная крошка',
      category: 'Начинки',
      price: 580,
      unit: 'кг',
      image: 'https://cdn.poehali.dev/projects/78f8017f-8b53-4cd5-a9ec-eb8689caf693/files/8279677a-a39a-4d26-90d1-e366e1422d18.jpg',
      description: 'Бельгийская шоколадная крошка',
    },
  ];

  const categories = ['Все', 'Орехи', 'Сухофрукты', 'Начинки'];

  const filteredProducts =
    selectedCategory === 'Все'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={28} />
              <div className="text-2xl font-bold font-heading text-accent">
                ОрехПродукт
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'about', label: 'О компании' },
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
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-28 pb-16 px-6 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-accent mb-6 leading-tight">
              Натуральные орехи
              <br />и сухофрукты
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Прямые поставки высококачественной продукции для кондитерских и розничной торговли
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8"
              >
                О компании
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: 'CheckCircle', text: 'Высокое качество' },
                { icon: 'Truck', text: 'Быстрая доставка' },
                { icon: 'Award', text: 'Сертификаты' },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 justify-center bg-white rounded-lg p-4 shadow-sm"
                >
                  <Icon name={feature.icon} className="text-primary" size={24} />
                  <span className="font-medium text-accent">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent mb-4">
              Каталог продукции
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Широкий ассортимент орехов, сухофруктов и кондитерских добавок
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-6"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="text-xs font-medium text-primary mb-2">{product.category}</div>
                  <h3 className="text-lg font-bold font-heading text-accent mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-accent">{product.price} ₽</div>
                      <div className="text-xs text-muted-foreground">за {product.unit}</div>
                    </div>
                    <Button size="sm" onClick={() => scrollToSection('contacts')}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ОрехПродукт — надёжный поставщик качественных орехов, сухофруктов и кондитерских
                ингредиентов. Мы работаем напрямую с производителями из разных стран, что позволяет
                предлагать лучшие цены без потери качества.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Наша продукция проходит строгий контроль качества и соответствует всем стандартам
                безопасности. Мы работаем как с крупными кондитерскими производствами, так и с
                розничными магазинами.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Сертифицированная продукция</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Контроль качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Гибкие условия</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {[
                { icon: 'Package', label: 'Видов товаров', value: '100+' },
                { icon: 'Users', label: 'Довольных клиентов', value: '500+' },
                { icon: 'Clock', label: 'Лет на рынке', value: '12' },
                { icon: 'TrendingUp', label: 'Рост продаж', value: '+40%' },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold font-heading text-accent mb-2">
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

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы ответить на все ваши вопросы и оформить заказ
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold font-heading text-accent mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: 'Phone',
                    title: 'Телефон',
                    value: '+7 (495) 789-01-23',
                    link: 'tel:+74957890123',
                  },
                  {
                    icon: 'Mail',
                    title: 'Email',
                    value: 'info@orehproduct.ru',
                    link: 'mailto:info@orehproduct.ru',
                  },
                  {
                    icon: 'MapPin',
                    title: 'Адрес',
                    value: 'Москва, Варшавское шоссе, д. 42',
                    link: null,
                  },
                  {
                    icon: 'Clock',
                    title: 'Режим работы',
                    value: 'Пн-Пт: 9:00-18:00, Сб-Вс: выходной',
                    link: null,
                  },
                ].map((contact) => (
                  <div key={contact.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {contact.title}
                      </div>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-accent hover:text-primary transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-accent font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 shadow-lg animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-heading text-accent mb-6">
                  Форма обратной связи
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Ваше имя
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Телефон
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите ваш запрос..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 bg-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={24} />
              <span className="font-bold text-accent">ОрехПродукт</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 ОрехПродукт. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
