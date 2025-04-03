import { motion } from "framer-motion";
import { FaInfinity, FaBrain, FaRocket } from "react-icons/fa";
import { useState } from "react";

const doces = [
  {
    nome: "Nebulosa de Brigadeiro",
    preco: "R$ 4,20",
    descricao:
      "Chocolate belga imerso em poeira cósmica de granulado. Um mergulho sensorial em uma galáxia doce.",
    imagem:
      "https://i.pinimg.com/736x/ea/69/8d/ea698df09c73b3a36a1d0a01cfa7eeb0.jpg",
  },
  {
    nome: "Constelação de Beijinho",
    preco: "R$ 4,00",
    descricao:
      "Coco cristalizado e leite condensado sideral com glitter comestível da Via Láctea.",
    imagem:
      "https://i.pinimg.com/736x/cc/5e/cb/cc5ecbfb1cf84eecefc7b7ec7db13a3d.jpg",
  },
  {
    nome: "Cometa de Cajuzinho",
    preco: "R$ 4,00",
    descricao:
      "Amendoim caramelizado em órbita com chocolate em fusão. Sabor que rasga o céu da boca.",
    imagem:
      "https://i.pinimg.com/736x/bd/f6/54/bdf654e249c865ec30b2368db9dbb4ea.jpg",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 bg-gradient-to-br from-black via-fuchsia-900 to-indigo-900">
      <div className="relative w-full max-w-lg rounded-3xl border border-pink-400 bg-black/90 p-8 text-white shadow-xl shadow-pink-500/10">
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-2xl text-pink-300 hover:text-yellow-300"
        >
          ×
        </button>
        <h3 className="mb-3 text-3xl font-black tracking-wide text-pink-300 drop-shadow">
          {doce.nome}
        </h3>
        <p className="mb-5 italic leading-relaxed text-pink-100">
          {doce.descricao}
        </p>
        <img
          src={doce.imagem}
          alt={doce.nome}
          className="h-64 w-full rounded-xl border border-pink-500 object-cover"
        />
      </div>
    </div>
  );
}

export default function DoceTripGalactica() {
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
    <div className="bg-gradient-to-b from-black via-indigo-950 to-black font-mono text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-6xl font-black text-transparent drop-shadow-lg"
        >
          🌌 Doce Trip Galáctica
        </motion.h1>
        <p className="mx-auto mt-6 max-w-xl text-xl opacity-80">
          Desperte sua consciência através de sabores cósmicos. Uma jornada onde
          o açúcar transcende dimensões.
        </p>
        <button
          onClick={() => setFormVisible(true)}
          className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-300 px-8 py-4 font-bold text-black shadow-lg transition hover:shadow-pink-400/50"
        >
          Iniciar Experiência 🚀
        </button>
      </section>

      {/* Benefícios */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
        <motion.div
          whileHover={{ rotate: 1 }}
          className="rounded-3xl border border-pink-500 bg-black/60 p-6 shadow-xl"
        >
          <FaInfinity className="mx-auto mb-4 animate-pulse text-6xl text-pink-300" />
          <h3 className="mb-2 text-2xl font-bold text-pink-100">
            Sabor Infinito
          </h3>
          <p>Ingredientes que expandem sua percepção.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-3xl border border-yellow-400 bg-black/60 p-6 shadow-xl"
        >
          <FaBrain className="mx-auto mb-4 animate-spin text-6xl text-yellow-300" />
          <h3 className="mb-2 text-2xl font-bold text-yellow-100">
            Ativação Neural
          </h3>
          <p>Combinações que estimulam memórias sensoriais.</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-purple-400 bg-black/60 p-6 shadow-xl"
        >
          <FaRocket className="mx-auto mb-4 animate-bounce text-6xl text-purple-300" />
          <h3 className="mb-2 text-2xl font-bold text-purple-100">
            Viagem Sensorial
          </h3>
          <p>Doces projetados para uma experiência transcendental.</p>
        </motion.div>
      </section>

      {/* Doces */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="mb-16 text-center text-5xl font-black text-pink-400">
          Catálogo Intergaláctico
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {doces.map((doce, index) => (
            <div
              key={index}
              onClick={() => openModal(doce)}
              className="cursor-pointer overflow-hidden rounded-3xl border-2 border-pink-300 bg-gradient-to-br from-fuchsia-700 to-violet-600 transition hover:shadow-2xl"
            >
              <img
                src={doce.imagem}
                alt={doce.nome}
                className="h-56 w-full border-b-4 border-pink-500 object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {doce.nome}
                </h3>
                <p className="font-semibold text-yellow-200">{doce.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={closeModal} doce={selectedDoce} />

      {formVisible && (
        <div className="animate-fade-in fixed left-1/2 top-24 z-50 w-full max-w-md -translate-x-1/2 transform rounded-3xl bg-gradient-to-br from-black via-gray-900 to-indigo-900 p-6 text-white shadow-2xl">
          <button
            onClick={closeForm}
            className="absolute right-4 top-3 text-2xl font-bold text-pink-400 hover:text-red-400"
          >
            ×
          </button>
          <h2 className="mb-6 text-center text-2xl font-black text-yellow-300">
            Reserve sua Viagem
          </h2>
          <label className="mb-4 block">
            <span className="mb-1 block font-semibold">Nome</span>
            <input
              type="text"
              className="w-full rounded-md border border-gray-500 bg-black/30 p-3"
              value={pedido.nome}
              onChange={(e) => setPedido({ ...pedido, nome: e.target.value })}
              placeholder="Digite seu nome"
            />
          </label>
          <label className="mb-6 block">
            <span className="mb-1 block font-semibold">Escolha o doce</span>
            <select
              className="w-full rounded-md border border-gray-500 bg-black/30 p-3"
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
            className="w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-xl transition hover:from-green-600 hover:to-emerald-700"
          >
            Finalizar pelo WhatsApp
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-fuchsia-900 via-indigo-800 to-black py-24 text-center">
        <h2 className="mb-4 text-4xl font-black text-white">
          Preparado para transcender?
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          Escolha seu doce intergaláctico e abra portais de sabor desconhecido.
        </p>
        <button className="rounded-full bg-pink-500 px-8 py-3 font-bold text-white transition hover:bg-pink-600">
          Comprar Agora 🛸
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-white">
        <p className="mb-2 text-sm text-pink-300">
          Nos siga nas galáxias sociais
        </p>
        <div className="mb-4 flex justify-center gap-6">
          <a href="#" className="hover:text-yellow-300">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-300">
            Facebook
          </a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; 2025 Doce Trip Galáctica. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
