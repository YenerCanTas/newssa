import { useState } from 'react';
import { Sparkles, Users, MessageCircle, Lightbulb, Mail, Linkedin, Instagram } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#262243] via-[#3d3763] to-[#4C46A8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 inline-block">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Scirise
            </h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
            Pozitif bilimlerin farklı disiplinlerle buluşma noktası <Sparkles className="inline-block w-10 h-10" />
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light">
            Disiplinlerarası etkileşimi bir kültüre dönüştüren yaratıcı düşünce topluluğu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#about" className="px-8 py-4 bg-white text-[#262243] rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105">
              Hakkımızda
            </a>
            <a href="#programs" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#262243] transition-all transform hover:scale-105">
              Etkinlikler
            </a>
            <a href="#contact" className="px-8 py-4 bg-[#4C46A8] text-white rounded-full font-medium hover:bg-[#5d56c0] transition-all transform hover:scale-105">
              Topluluğa Katıl
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#262243] mb-8 text-center">Biz Kimiz?</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Scirise, disiplinlerarası etkileşimi bir kültüre dönüştürerek farklı alanlardan bireylerin
            potansiyellerini bir araya getiren, cesur fikirlerin doğduğu ve sınırların olmadığı bir yaratıcı
            düşünce platformudur. Bilimi toplumsal fayda ve girişimcilik ile buluşturan bir topluluktur.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#262243] mb-8 text-center">Ne Yaparız</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Scirise, pozitif bilimlerin birbirleriyle ve farklı disiplinlerle etkileşimine odaklanan söyleşiler,
            atölyeler ve etkinlikler düzenleyerek birbirini hiç tanımasa da birbirini tamamlayan bireyleri
            yaratıcı ve özgür fikir üretme ortamlarında buluşturur.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-[#262243] mb-16 text-center">Programlarımız</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kolektif Masa */}
            <div className="group bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-3xl p-8 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kolektif Masa</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Farklı disiplinlerden gelen yaratıcı zihinlerin aynı masada buluştuğu yaratıcı bir düşünce deneyimi.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong>Amaç:</strong> Gerçek bir problemi farklı perspektiflerle ele alarak uygulanabilir çözüm tasarımları ortaya koymak.
              </p>
            </div>

            {/* Cross Talks */}
            <div className="group bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-3xl p-8 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <MessageCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross Talks</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Farklı disiplinlerin kesişimlerinde ilham veren çalışmalara imza atmış isimleri ağırladığımız online bir söyleşi serisi.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Katılımcılar, sınırları aşan hikayeleri ve vizyonlarıyla ilham verir. Takipte kal, hiçbir bölümü kaçırma! 🤝
              </p>
            </div>

            {/* Scirise Spotlight */}
            <div className="group bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-3xl p-8 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Lightbulb className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scirise Spotlight</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Her ay topluluk üyelerinden biri sahneye çıkar, yetkin olduğu konuda bilgi paylaşır.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ardından soru-cevap ve deneyim paylaşımıyla kolektif bir öğrenme ortamı oluşur. 🌍 <strong>Amacımız:</strong> Bilgi paylaşımı, farklı alanlara yeni pencereler açmak ve kolektif öğrenmeyi güçlendirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-[#262243] mb-16 text-center">Ekip</h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-full flex items-center justify-center text-white text-4xl font-bold transform transition-all duration-300 group-hover:scale-110">
                A
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Alara</h3>
              <p className="text-gray-600">Kurucu & Koordinatör</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-full flex items-center justify-center text-white text-4xl font-bold transform transition-all duration-300 group-hover:scale-110">
                N
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Nazlıcan</h3>
              <p className="text-gray-600">Etkinlik Tasarımı</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-full flex items-center justify-center text-white text-4xl font-bold transform transition-all duration-300 group-hover:scale-110">
                E
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Eda</h3>
              <p className="text-gray-600">İçerik ve İletişim</p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-full flex items-center justify-center text-white text-4xl font-bold transform transition-all duration-300 group-hover:scale-110">
                E
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Efe</h3>
              <p className="text-gray-600">Topluluk Gelişimi</p>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700">
            Scirise ekibi, farklı disiplinlerden gelen gençlerin ortak üretim gücüne inanır.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#262243] via-[#3d3763] to-[#4C46A8] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Bizimle İletişime Geç 💌</h2>
          <p className="text-xl mb-12 text-center text-gray-200">Birlikte üretelim, birlikte öğrenelim.</p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <input
                type="text"
                placeholder="Ad"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Mesaj"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="w-full px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-[#262243] rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Gönder
            </button>
          </form>

          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:info@scirise.com" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#262243] text-center text-gray-400">
        <p>© 2025 Scirise. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
