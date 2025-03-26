import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaWind, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gradient-to-bl from-emerald-900 via-black to-zinc-900 font-sans text-white">
      {/* HERO - ATMOSFERA NATURAL & ORGÂNICA */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2100&q=80"
            alt="Natureza viva"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-lime-300 via-teal-400 to-cyan-500 bg-clip-text text-6xl font-black text-transparent drop-shadow-lg md:text-7xl"
        >
          AURAVIVA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-2xl text-xl text-white/80 md:text-2xl"
        >
          Um portal natural de experiências visuais, conexão com a essência e
          estética orgânica.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 px-8 py-3 font-semibold text-white shadow-xl"
        >
          Explorar Conexão
        </motion.button>
      </section>

      {/* ELEMENTOS NATURAIS */}
      <section className="border-t border-white/10 bg-white/5 px-6 py-24 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
          {[
            {
              icon: <FaLeaf className="mx-auto text-5xl text-lime-300" />,
              title: "Presença",
              desc: "Estar inteiro no momento e permitir que a beleza se revele naturalmente.",
            },
            {
              icon: <FaWater className="mx-auto text-5xl text-cyan-300" />,
              title: "Fluxo",
              desc: "Deixar a criatividade fluir como um rio, sem interrupções.",
            },
            {
              icon: <FaWind className="mx-auto text-5xl text-teal-300" />,
              title: "Leveza",
              desc: "Respirar visualmente. Criar com elegância, espaço e suavidade.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 + i * 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg hover:shadow-lime-300/10"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS ATMOSFÉRICOS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Vozes que ecoam com leveza
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                name: "Cristiane",
                quote:
                  "Senti que estava num refúgio visual. Tudo respira, tudo flui. Uma experiência viva.",
              },
              {
                name: "Guilherme",
                quote:
                  "A forma como luz, espaço e som foram usados me tocou profundamente. É mais que design.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 + i * 0.2 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md"
              >
                <p className="italic text-white/80">"{item.quote}"</p>
                <p className="mt-4 font-semibold text-lime-300">
                  – {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL REVITALIZANTE */}
      <section className="bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 px-6 py-24 text-center text-gray-900">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-4xl font-black drop-shadow-xl"
        >
          Viva com leveza. Crie com essência.
        </motion.h2>
        <p className="mb-8 text-lg">
          A natureza é o código. A arte é a expressão.
        </p>
        <button className="rounded-full bg-black px-10 py-4 font-semibold text-white hover:bg-zinc-900">
          Iniciar Jornada Natural
        </button>
      </section>

      {/* RODAPÉ ORGÂNICO */}
      <footer className="border-t border-white/10 bg-black py-10 text-center text-white">
        <div className="mb-6 flex justify-center gap-6">
          <a href="#" className="hover:text-lime-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-cyan-300">
            <FaTiktok size={24} />
          </a>
        </div>
        <p className="text-sm text-white/40">
          &copy; 2025 AURAVIVA – Inspiração fluida, estética viva.
        </p>
      </footer>
    </div>
  );
}
