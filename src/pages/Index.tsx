import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [calculatorAmount, setCalculatorAmount] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gold">BaliLovers</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-gold">О проекте</a>
            <a href="#advantages" className="transition-colors hover:text-gold">Преимущества</a>
            <a href="#layouts" className="transition-colors hover:text-gold">Планировки</a>
            <a href="#finance" className="transition-colors hover:text-gold">Финансовая модель</a>
            <a href="#calculator" className="transition-colors hover:text-gold">Калькулятор</a>
            <a href="#contacts" className="transition-colors hover:text-gold">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 to-dark-700">
        <div className="absolute inset-0 bg-[url('/img/d9b8f5c0-dc6d-4f67-b311-5168e856d2ad.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Место, куда будут стремиться все, 
            <span className="text-gold block mt-2">а вы можете этим владеть</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-4">
            апартаменты на Бали от <span className="text-gold font-semibold">$82 400</span>
          </h2>
          <p className="text-lg md:text-xl text-gold mb-8 font-semibold">
            Доход до 14% в год + рост капитала до 40% за 2,5 года
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-dark font-semibold px-8">
              Получить презентацию
            </Button>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark px-8">
                  Оставить заявку
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Свяжемся с вами</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами в течение 15 минут
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <Button type="submit" className="w-full bg-gold hover:bg-gold/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">О комплексе</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Первый эксклюзивный Wellness-комплекс в центре Убуда на королевской земле. 
              Проект предлагает уникальную инфраструктуру и панорамные виды на рисовые террасы и джунгли.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'Flame', title: 'Костровая зона' },
              { icon: 'Waves', title: 'Большая баня на дровах с ледяным бассейном' },
              { icon: 'Mountain', title: 'Инфинити бассейн с видом на рисовые террасы' },
              { icon: 'Film', title: 'Кинотеатр' },
              { icon: 'Sparkles', title: 'SPA' },
              { icon: 'Car', title: 'Паркинг' },
              { icon: 'Utensils', title: 'Панорамный ресторан с видом на джунгли' },
              { icon: 'Heart', title: 'Площадка для йоги' },
              { icon: 'Trees', title: 'Зоны для прогулок и бега' },
            ].map((item, index) => (
              <Card key={index} className="text-center border-gold/20 hover:border-gold/40 transition-colors">
                <CardContent className="p-6">
                  <Icon name={item.icon} size={40} className="mx-auto mb-4 text-gold" />
                  <p className="text-sm">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">132</h3>
              <p className="text-muted-foreground">юнита и 6 видов планировок</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">9 620 М²</h3>
              <p className="text-muted-foreground">общая площадь земли</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold mb-2">33+30</h3>
              <p className="text-muted-foreground">срок аренды земли</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему инвесторы выбирают этот комплекс</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Heart',
                title: 'Целостная концепция',
                description: 'Не просто Wellness отель, а целостная концепция отдыха, где каждая деталь направлена на создание атмосферы гармонии'
              },
              {
                icon: 'MapPin',
                title: 'Центр Убуда',
                description: 'Локация в сердце Убуда — центр культурной и туристической жизни Бали'
              },
              {
                icon: 'Sparkles',
                title: 'Wellness-инфраструктура',
                description: 'Wellness-инфраструктура мирового уровня, на территории комплекса +25 различных практик'
              },
              {
                icon: 'Shield',
                title: 'Полная заполняемость',
                description: 'Гарантируем полную заполняемость круглый год (управление объектом под ключ)'
              },
              {
                icon: 'TrendingUp',
                title: 'До 14% годовых',
                description: 'Доход до 14% годовых'
              },
              {
                icon: 'DollarSign',
                title: 'Рост до +40%',
                description: 'Рост стоимости до +40% за 2,5 года при перепродаже'
              }
            ].map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-gold/20">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <Icon name={advantage.icon} size={48} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ваши инвестиции должны приносить больше</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">Проблемы традиционных инвестиций:</h3>
              <div className="space-y-4">
                {[
                  'Низкая доходность инвестиционной недвижимости',
                  'Нет гарантии заполняемости',
                  'Инфляция съедает прибыль',
                  'Долгий срок окупаемости'
                ].map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="X" className="text-red-500" size={20} />
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold">Наше решение:</h3>
              <div className="space-y-4">
                {[
                  'Высокий спрос на аренду на Бали',
                  'Тренд на wellness-туризм',
                  'Прозрачная модель дохода'
                ].map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" className="text-gold" size={20} />
                    <p>{solution}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-gold hover:bg-gold/90">
                Узнайте, как ваши деньги могут работать на все 100%
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section id="finance" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Финансовая модель</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-gold/20">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-gold mb-2">14%</div>
                <p className="text-muted-foreground">доход от аренды годовых</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-gold/20">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-gold mb-2">+40%</div>
                <p className="text-muted-foreground">рост капитала за 2,5 года</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-gold/20">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-gold mb-2">15%</div>
                <p className="text-muted-foreground">первый взнос рассрочки</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-gold/20">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-gold mb-2">8%</div>
                <p className="text-muted-foreground">скидка при 100% оплате</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gold hover:bg-gold/90">
              Получить презентацию проекта
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Калькулятор доходности</h2>
          </div>

          <Card className="max-w-md mx-auto p-8 border-gold/20">
            <CardContent className="p-0 space-y-6">
              <div>
                <Label htmlFor="amount" className="text-lg">Сумма инвестиций ($)</Label>
                <Input 
                  id="amount"
                  type="number"
                  placeholder="100000"
                  value={calculatorAmount}
                  onChange={(e) => setCalculatorAmount(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>
              {calculatorAmount && (
                <div className="text-center p-4 bg-gold/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Ваш доход за 2 года:</p>
                  <p className="text-2xl font-bold text-gold">
                    ${(parseFloat(calculatorAmount) * 0.28).toLocaleString()}
                  </p>
                </div>
              )}
              <Button className="w-full bg-gold hover:bg-gold/90">
                Получить детальный просчет
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Надёжный партнёр в инвестиционной недвижимости</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '10', text: 'лет опыта в международной недвижимости' },
              { number: '200+', text: 'успешных сделок на Бали' },
              { number: '100%', text: 'легальная работа в рамках законодательства' }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-gold/20">
                <CardContent className="p-0">
                  <h3 className="text-5xl font-bold text-gold mb-4">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Собственная команда аналитиков, брокеров, юристов и земельный отдел. 
              Полное сопровождение сделки от А до Я.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 bg-gold text-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Специальное предложение</h2>
          <p className="text-xl mb-8">
            До конца сентября — скидка 8% при полной оплате или рассрочка с первым взносом от 15%
          </p>
          <Button size="lg" variant="outline" className="border-dark text-dark hover:bg-dark hover:text-gold">
            Забронировать апартамент
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-dark-900 to-dark-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Начните создавать свое финансовое будущее
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Инвестируйте в недвижимость, которая работает на вас
          </p>

          <Card className="max-w-md mx-auto p-8 bg-white/10 border-white/20">
            <CardContent className="p-0">
              <form className="space-y-4">
                <Input placeholder="Имя" className="bg-white/10 border-white/30 text-white placeholder:text-white/70" />
                <Input placeholder="Телефон" className="bg-white/10 border-white/30 text-white placeholder:text-white/70" />
                <Input placeholder="Email" type="email" className="bg-white/10 border-white/30 text-white placeholder:text-white/70" />
                <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-dark font-semibold">
                  Отправить
                </Button>
              </form>
              <p className="text-sm text-white/70 mt-4">
                Мы свяжемся с вами в течение 15 минут
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">BaliLovers</h3>
              <p className="text-white/70">
                Надежный партнер в инвестиционной недвижимости на Бали
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>office@balilovers.estate</p>
                <p>WA +6281239838440</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/balilovers" className="text-white/70 hover:text-gold transition-colors">
                  Telegram
                </a>
                <a href="https://www.instagram.com/balilovers_real_estate" className="text-white/70 hover:text-gold transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 BaliLovers. Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;