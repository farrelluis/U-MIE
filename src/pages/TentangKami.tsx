const marketImg = "https://images.unsplash.com/photo-1774370793502-85098cd3fd00?w=900&h=600&fit=crop&auto=format";
const noodleImg = "https://images.unsplash.com/photo-1611280422374-fa3c1110c16e?w=600&h=600&fit=crop&auto=format";

const values = [
  { icon: "🌶️", title: "Otentik", desc: "Bumbu asli tanpa MSG berlebihan, diracik dari rempah pilihan yang kami sumber langsung dari petani lokal." },
  { icon: "🔥", title: "Semangat", desc: "Setiap hari kami masak dengan api penuh semangat. Tidak ada porsi yang dimasak asal-asalan di dapur kami." },
  { icon: "🤝", title: "Jujur", desc: "Harga transparan, bahan jujur, pelayanan setara. Begitulah cara kami membangun kepercayaan pelanggan." },
];

const timeline = [
  { year: "2020", event: "U&MIE lahir dari gerobak kecil di pinggir jalan Margonda, Depok." },
  { year: "2021", event: "Menu Ice Caffe Latte hadir sebagai pelengkap sempurna menu mie goreng." },
  { year: "2022", event: "Nasi Goreng Spesial masuk menu dan langsung jadi favorit pelanggan." },
  { year: "2024", event: "Hadir secara online! Pesan via WhatsApp kapanpun, dimanapun." },
];

export default function TentangKami() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={marketImg} alt="Suasana street food" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Tentang Kami</span>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#FFF8F0] mt-3 mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Dari gerobak,<br />
            <span className="text-[#F5A623]">untuk semua.</span>
          </h1>
          <p className="text-[#FFF8F0]/70 text-lg leading-relaxed">
            U&MIE lahir dari keyakinan sederhana: makanan enak tidak harus mahal, dan kesederhanaan bisa menjadi kebanggaan.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Kisah Kami</span>
            <h2
              className="text-3xl font-bold text-[#FFF8F0] mt-3 mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Berawal dari satu wajan, satu mimpi.
            </h2>
            <div className="flex flex-col gap-4 text-[#FFF8F0]/70 text-sm leading-relaxed">
              <p>
                U&MIE dimulai di 2020 dari sebuah gerobak kecil yang dipasang di pinggir jalan dengan modal seadanya. Bukan karena kami tidak punya pilihan lain — tapi karena kami percaya pada kekuatan makanan untuk menyatukan orang.
              </p>
              <p>
                Nama "U&MIE" bukan hanya soal produk. Ini soal hubungan. Antara kami dan kamu. Antara makanan dan kenangan. Antara rasa dan cerita di baliknya.
              </p>
              <p>
                Hari ini, U&MIE telah melayani lebih dari 500 pelanggan setia dengan tiga menu andalan yang terus kami sempurnakan. Dan perjalanan ini baru saja dimulai.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={noodleImg}
              alt="Mie goreng spesial U&MIE"
              className="w-full h-80 object-cover rounded-3xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#E8472A] text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>4 Tahun</div>
              <div className="text-xs opacity-80">Melayani dengan cinta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#100A04]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Nilai Kami</span>
            <h2
              className="text-3xl font-bold text-[#FFF8F0] mt-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Yang kami pegang teguh
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#2B1D0E] border border-[#3d2510] rounded-2xl p-7 text-center">
                <span className="text-4xl">{v.icon}</span>
                <h3
                  className="text-[#FFF8F0] font-bold text-lg mt-4 mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#8C7060] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#E8472A] text-xs font-bold uppercase tracking-widest">Perjalanan</span>
          <h2
            className="text-3xl font-bold text-[#FFF8F0] mt-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Milestone U&MIE
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#3d2510]" />
          <div className="flex flex-col gap-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6 items-start pl-4">
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#E8472A] flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="pb-2">
                  <span
                    className="text-[#F5A623] font-bold text-xl"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {t.year}
                  </span>
                  <p className="text-[#FFF8F0]/70 text-sm mt-1 leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
