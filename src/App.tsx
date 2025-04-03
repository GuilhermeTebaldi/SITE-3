import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======
import { FaCandyCane, FaSmileBeam, FaLeaf } from "react-icons/fa";
import { useState } from "react";

const doces = [
  {
    nome: "Brigadeiro Psicodélico",
    preco: "R$ 3,50",
    descricao:
      "Explosão de sabor com chocolate belga e granulado neon! Sinta o doce em outra dimensão.",
    imagem:
      "https://i.pinimg.com/736x/b2/34/5c/b2345cdb938c169a28eba4f81d6ba2fe.jpg",
  },
  {
    nome: "Beijinho Cósmico",
    preco: "R$ 3,00",
    descricao:
      "Coco ralado com leite condensado e glitter comestível. Direto da galáxia do sabor!",
    imagem:
      "https://i.pinimg.com/736x/5f/f8/d6/5ff8d64030b55ec98ef10e728767d7de.jpg",
  },
  {
    nome: "Cajuzinho Holográfico",
    preco: "R$ 3,00",
    descricao:
      "A combinação de amendoim e chocolate em uma apresentação visual de outro mundo.",
    imagem:
      "https://i.pinimg.com/736x/8e/73/2d/8e732dcd2163c3559ed9f32c4f697627.jpg",
  },
];

type Doce = {
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  doce: Doce | null;
};

function Modal({ isOpen, onClose, doce }: ModalProps) {
  if (!isOpen || !doce) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-md rounded-2xl border border-white bg-black p-6 text-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-xl text-white hover:text-pink-400"
        >
          ×
        </button>
        <h3 className="mb-2 text-2xl font-bold text-pink-300">{doce.nome}</h3>
        <p className="mb-4 text-pink-100">{doce.descricao}</p>
        <img
          src={doce.imagem}
          alt={doce.nome}
          className="h-64 w-full rounded-xl border border-white object-cover"
        />
      </div>
    </div>
  );
}

export default function DoceCaseiroSite() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoce, setSelectedDoce] = useState<Doce | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [pedido, setPedido] = useState({ nome: "", doce: doces[0].nome });

  const openModal = (doce: Doce) => {
    setSelectedDoce(doce);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDoce(null);
  };

  const handlePedido = () => {
    const link = `https://wa.me/SEUNUMERO?text=Olá! Meu nome é ${pedido.nome} e gostaria de comprar o doce: ${pedido.doce}.`;
    window.open(link, "_blank");
  };

  const closeForm = () => setFormVisible(false);

  return (
    <div className="relative bg-gradient-to-br from-fuchsia-900 via-indigo-800 to-sky-900 text-white">
      {formVisible && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={closeForm}
        ></div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-tr from-purple-700 via-pink-500 to-yellow-400 px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-6xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          🍭 Doce Trip Alucinante 🍭
        </motion.h1>
        <p className="mb-6 text-2xl font-medium drop-shadow-md">
          Doces lisérgicos para saborear em outra vibração
        </p>
        <button
          onClick={() => setFormVisible(true)}
          className="rounded-full border-2 border-white bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-xl transition hover:bg-pink-100"
        >
          Viajar com sabores 🚀
        </button>
      </section>

      {/* Benefícios */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 text-center md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 p-6 shadow-2xl"
        >
          <FaCandyCane className="mx-auto mb-4 animate-pulse text-5xl text-white" />
          <h3 className="mb-2 text-2xl font-bold">Receitas Surreais</h3>
          <p>Ingredientes que despertam sentidos além do paladar.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-gradient-to-br from-pink-600 to-yellow-500 p-6 shadow-2xl"
        >
          <FaSmileBeam className="animate-spin-slow mx-auto mb-4 text-5xl text-white" />
          <h3 className="mb-2 text-2xl font-bold">Explosão Sensorial</h3>
          <p>Doces que mudam sua vibração com cada mordida.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 p-6 shadow-2xl"
        >
          <FaLeaf className="mx-auto mb-4 animate-bounce text-5xl text-white" />
          <h3 className="mb-2 text-2xl font-bold">Colorido & Natural</h3>
          <p>Sem aditivos, só magia pura e ingredientes reais.</p>
        </motion.div>
      </section>

      {/* Doces à venda */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="mb-16 text-center text-5xl font-extrabold text-pink-400 drop-shadow">
          Escolha sua viagem doce
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {doces.map((doce, index) => (
            <div
              key={index}
              onClick={() => openModal(doce)}
              className="cursor-pointer overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-yellow-300 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-4">
                <img
                  src={doce.imagem}
                  alt={doce.nome}
                  className="mb-4 h-48 w-full rounded-xl border-4 border-white object-cover"
                />
                <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-md">
                  {doce.nome}
                </h3>
                <p className="font-bold text-yellow-100">{doce.preco}</p>
              </div>
            </div>
>>>>>>> 749435e (Atualizações no site)
          ))}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <Modal isOpen={modalOpen} onClose={closeModal} doce={selectedDoce} />

      {/* Formulário flutuante */}
      {formVisible && (
        <div className="animate-fade-in fixed left-1/2 top-24 z-50 w-full max-w-md -translate-x-1/2 transform rounded-2xl bg-gradient-to-br from-white via-pink-100 to-yellow-100 p-6 text-black shadow-2xl">
          <button
            onClick={closeForm}
            className="absolute right-4 top-3 text-xl font-bold text-gray-600 hover:text-red-500"
          >
            ×
          </button>
          <h2 className="mb-6 text-center text-2xl font-extrabold">
            Escolha sua viagem 🍬
          </h2>
          <label className="mb-4 block">
            <span className="mb-1 block font-semibold">Seu nome</span>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2"
              value={pedido.nome}
              onChange={(e) => setPedido({ ...pedido, nome: e.target.value })}
              placeholder="Digite seu nome"
            />
          </label>
          <label className="mb-6 block">
            <span className="mb-1 block font-semibold">Selecione o doce</span>
            <select
              className="w-full rounded-md border border-gray-300 p-2"
              value={pedido.doce}
              onChange={(e) => setPedido({ ...pedido, doce: e.target.value })}
            >
              {doces.map((d, i) => (
                <option key={i} value={d.nome}>
                  {d.nome}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handlePedido}
            className="w-full rounded-full bg-gradient-to-r from-green-400 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg transition hover:from-green-500 hover:to-emerald-700"
          >
            Comprar agora pelo WhatsApp
          </button>
        </div>
      )}

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-pink-600 via-indigo-500 to-cyan-400 px-4 py-20 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-white drop-shadow">
          Pronto pra embarcar nessa?
        </h2>
        <p className="mb-6 text-xl text-white drop-shadow">
          Escolha o doce e sinta a brisa do sabor psicodélico!
        </p>
        <button className="rounded-full border border-black bg-white px-6 py-3 text-lg font-bold text-indigo-600 hover:bg-black hover:text-white">
          Comprar agora ✨
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-white">
        <p className="mb-2 text-pink-200">Siga-nos nas redes cósmicas</p>
        <div className="mb-4 flex justify-center gap-4">
          <a href="#" className="hover:text-yellow-300">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-300">
            Facebook
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Doce Trip. Todos os direitos reservados.
>>>>>>> 749435e (Atualizações no site)
        </p>
      </footer>
    </div>
  );
}
