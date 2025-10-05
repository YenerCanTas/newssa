import { useState } from 'react';
import { Sparkles, Users, MessageCircle, Lightbulb, Mail, Linkedin, Instagram, Menu, X } from 'lucide-react';
import teamNazlican from './assets/team-nazlican.png';
import teamAlara from './assets/team-alara.png';
import teamEda from './assets/team-eda.png';
import activity1 from './assets/activity-1.png';
import activity2 from './assets/activity-2.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <Sparkles className="w-8 h-8 text-[#4C46A8] group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold text-[#262243]">Scirise</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors">
                Hakkımızda
              </a>
              <a href="#programs" className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors">
                Etkinlikler
              </a>
              <a href="#team" className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors">
                Ekip
              </a>
              <a href="#contact" className="px-6 py-2 bg-[#4C46A8] text-white rounded-full font-medium hover:bg-[#5d56c0] transition-all transform hover:scale-105">
                Bize Ulaşın
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#262243]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a
                href="#about"
                className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#programs"
                className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Etkinlikler
              </a>
              <a
                href="#team"
                className="text-[#262243] hover:text-[#4C46A8] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ekip
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-[#4C46A8] text-white rounded-full font-medium hover:bg-[#5d56c0] transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bize Ulaşın
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#262243] via-[#3d3763] to-[#4C46A8] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Pozitif bilimlerin farklı disiplinlerle buluşma noktası
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto">
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
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#262243] mb-6">Biz Kimiz?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Scirise, disiplinlerarası etkileşimi bir kültüre dönüştürerek farklı alanlardan bireylerin
                potansiyellerini bir araya getiren, cesur fikirlerin doğduğu ve sınırların olmadığı bir yaratıcı
                düşünce platformudur. Bilimi toplumsal fayda ve girişimcilik ile buluşturan bir topluluktur.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 p-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-2xl text-white text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">Topluluk Üyesi</div>
                </div>
                <div className="flex-1 p-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-2xl text-white text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Etkinlik</div>
                </div>
                <div className="flex-1 p-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-2xl text-white text-center transform hover:scale-105 transition-all">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm">Disiplin</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#4C46A8] to-[#262243] rounded-3xl opacity-20"></div>
                <img
                  src={activity1}
                  alt="Scirise Etkinliği"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#4C46A8] to-[#262243] rounded-3xl opacity-20"></div>
                <img
                  src={activity2}
                  alt="Scirise Çalışması"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#262243] mb-6">Ne Yaparız</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Scirise, pozitif bilimlerin birbirleriyle ve farklı disiplinlerle etkileşimine odaklanan söyleşiler,
                atölyeler ve etkinlikler düzenleyerek birbirini hiç tanımasa da birbirini tamamlayan bireyleri
                yaratıcı ve özgür fikir üretme ortamlarında buluşturur.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4C46A8] rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#262243] mb-1">Disiplinlerarası İşbirlikleri</h3>
                    <p className="text-gray-600">Farklı alanlardan uzmanları bir araya getiriyoruz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4C46A8] rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#262243] mb-1">İlham Verici Söyleşiler</h3>
                    <p className="text-gray-600">Sınırları aşan hikayeler ve vizyonlar paylaşıyoruz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4C46A8] rounded-full">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#262243] mb-1">Yaratıcı Atölyeler</h3>
                    <p className="text-gray-600">Uygulamalı çözüm tasarımları geliştiriyoruz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#262243] mb-4 text-center">Programlarımız</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Farklı disiplinlerin buluştuğu, yaratıcı düşüncenin filizlendiği programlarımızla tanışın
          </p>

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
                Katılımcılar, sınırları aşan hikayeleri ve vizyonlarıyla ilham verir. Takipte kal, hiçbir bölümü kaçırma!
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
                Ardından soru-cevap ve deneyim paylaşımıyla kolektif bir öğrenme ortamı oluşur. <strong>Amacımız:</strong> Bilgi paylaşımı, farklı alanlara yeni pencereler açmak ve kolektif öğrenmeyi güçlendirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#262243] mb-4 text-center">Ekip</h2>
          <p className="text-xl text-gray-600 mb-16 text-center">
            Scirise ekibi, farklı disiplinlerden gelen gençlerin ortak üretim gücüne inanır.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={teamNazlican}
                  alt="Nazlıcan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Nazlıcan</h3>
              <p className="text-[#4C46A8] font-semibold">Founder</p>
            </div>

            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={teamAlara}
                  alt="Alara"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Alara</h3>
              <p className="text-gray-600">Core Team</p>
            </div>

            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={teamEda}
                  alt="Eda"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Eda</h3>
              <p className="text-gray-600">Core Team</p>
            </div>

            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-[#262243] to-[#4C46A8] rounded-3xl flex items-center justify-center text-white text-5xl font-bold transform transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-2xl">
                E
              </div>
              <h3 className="text-xl font-bold text-[#262243] mb-1">Efe</h3>
              <p className="text-gray-600">Core Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#262243] via-[#3d3763] to-[#4C46A8] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Bizimle İletişime Geç</h2>
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
