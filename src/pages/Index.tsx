import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'music', 'concerts', 'gallery', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О группе' },
    { id: 'music', label: 'Музыка' },
    { id: 'concerts', label: 'Концерты' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const concerts = [
    { date: '15 декабря 2024', venue: 'Клуб "Космонавт"', city: 'Москва' },
    { date: '22 декабря 2024', venue: 'Зал "Аврора"', city: 'Санкт-Петербург' },
    { date: '10 января 2025', venue: 'Арт-пространство "Ветер"', city: 'Казань' },
  ];

  const tracks = [
    { title: 'Шёпот листвы', duration: '4:23' },
    { title: 'Дорога домой', duration: '3:45' },
    { title: 'Между небом и землёй', duration: '5:12' },
    { title: 'Последний свет', duration: '4:01' },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-accent">Травы ветра</h2>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent font-semibold' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/36eee92b-6816-4f65-99a9-729e6b7afe45/files/7ce857b8-2a10-4904-98a6-845dde793191.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent">Травы ветра</h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Музыка, рождённая природой и вдохновлённая свободой
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('music')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Послушать музыку
            </Button>
            <Button
              onClick={() => scrollToSection('concerts')}
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Концерты
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-accent">О группе</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 leading-relaxed">
                Травы ветра — это музыкальный коллектив, созданный в 2018 году. Наша музыка сочетает
                элементы фолка, инди-рока и атмосферных звучаний.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Вдохновение мы черпаем из природы, путешествий и простых человеческих историй. Каждая
                наша песня — это маленькое путешествие, приглашение остановиться и прислушаться к миру
                вокруг.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                В составе четыре музыканта, каждый из которых привносит свою уникальную энергию в общее
                звучание группы.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/36eee92b-6816-4f65-99a9-729e6b7afe45/files/3de4a891-90c1-40b9-8e16-4fc63a6544dd.jpg"
                alt="Группа Травы ветра"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="music" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">Музыка</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-background border-border hover:border-accent transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-32 h-32 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Music" size={48} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Последний альбом</h3>
                  <p className="text-muted-foreground">«Между небом и землёй» • 2024</p>
                </div>
              </div>
              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Play" size={20} className="text-primary-foreground ml-1" />
                      </button>
                      <span className="text-lg">{track.title}</span>
                    </div>
                    <span className="text-muted-foreground">{track.duration}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="concerts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">Концерты</h2>
          <div className="grid gap-6">
            {concerts.map((concert, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center min-w-[80px]">
                      <div className="text-2xl font-bold">{concert.date.split(' ')[0]}</div>
                      <div className="text-sm">{concert.date.split(' ').slice(1).join(' ')}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{concert.venue}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {concert.city}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Купить билет
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/36eee92b-6816-4f65-99a9-729e6b7afe45/files/26d0e502-7ab8-4cfc-be21-c162358dd25e.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center bg-primary/20">
                  <Icon name="Image" size={48} className="text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">Контакты</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Свяжитесь с нами для сотрудничества или пригласите на выступление
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:info@travyvetra.ru"
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <Icon name="Mail" size={24} />
              info@travyvetra.ru
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <Icon name="Phone" size={24} />
              +7 (999) 123-45-67
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <Icon name="Music" size={24} className="text-primary-foreground" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <Icon name="Youtube" size={24} className="text-primary-foreground" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <Icon name="Instagram" size={24} className="text-primary-foreground" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Травы ветра. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
