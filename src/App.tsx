// Importações essenciais para animações, ícones e hooks do React
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaMagic,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaStore,
} from "react-icons/fa";

// Lista de produtos (doces)
type Doce = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

const doces: Doce[] = [
  {
    id: 1,
    nome: "Nether Rosa Natural",
    preco: "R$ 50,00",
    descricao: "Refração mágica natural estrelado com camadas de paz.",
    imagem:
      "https://i.pinimg.com/736x/60/ec/ca/60ecca65e8238bd5d9bc084173d4b852.jpg",
  },
  {
    id: 2,
    nome: "End azul menta",
    preco: "R$ 100,00",
    descricao: "Doce floral de cacau vibrante com ( Menta ) e harmonia.",
    imagem:
      "https://i.pinimg.com/736x/bd/fb/92/bdfb924843fb6168a047a645a7760908.jpg",
  },
];

// Componente principal da página
export default function DimensaoDoce() {
  const [formVisible, setFormVisible] = useState<number | null>(null);
  const [nomeCliente, setNomeCliente] = useState<string>("");
  const [produtoEscolhido, setProdutoEscolhido] = useState<number | null>(null);
  const [mostrarLocalizacao, setMostrarLocalizacao] = useState(false);
  const [retirada, setRetirada] = useState<"local" | "entrega">("local");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setFormVisible(null);
        setMostrarLocalizacao(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const enviarPedido = () => {
    if (!mostrarLocalizacao) {
      setMostrarLocalizacao(true);
      return;
    }
    const doce = doces.find((d) => d.id === produtoEscolhido);
    if (!doce) return;

    let texto = `Olá, meu nome é ${nomeCliente} e gostaria de pedir o doce: ${doce.nome} - ${doce.preco}.`;
    if (retirada === "entrega") {
      texto += `\nDesejo receber em casa:\nRua: ${rua}, Nº ${numero}, Bairro: ${bairro}, Cidade: ${cidade} (acrescentar custo de entrega)`;
    } else {
      texto += "\nVou retirar no local.";
    }
    const link = `https://wa.me/5500000000000?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-fuchsia-900 via-sky-600 to-lime-300 px-4 py-10 text-white">
      {/* Elementos visuais de fundo psicodélico */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-10 h-64 w-64 animate-pulse rounded-full bg-pink-400 opacity-20 blur-3xl" />
        <div className="animate-spin-slow absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400 opacity-30 blur-2xl" />
      </div>

      {/* Cabeçalho com título e slogan */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto mb-14 max-w-md text-left"
      >
        <h1 className="bg-gradient-to-r from-yellow-200 via-pink-400 to-blue-900 bg-clip-text text-4xl font-extrabold leading-snug text-transparent sm:text-5xl">
          🍭 OVERWORLD
        </h1>
        <p className="mt-3 text-base text-white/70 sm:text-lg">
          Uma nova realidade onde sabores se tornam visões.
        </p>
      </motion.div>

      {/* Lista de doces com formulário dinâmico */}
      <div className="flex flex-col gap-14">
        {doces.map((doce, index) => (
          <motion.div
            key={doce.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col ${index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-2xl transition-all`}
          >
            <img
              src={doce.imagem}
              alt={doce.nome}
              className="h-56 w-full rounded-xl object-cover saturate-150 sm:w-1/2"
            />
            <div className="w-full text-left sm:w-1/2">
              <h2 className="mb-3 text-3xl font-extrabold text-amber-400">
                {doce.nome}
              </h2>
              <button
                onClick={() => {
                  setFormVisible(doce.id);
                  setProdutoEscolhido(doce.id);
                  setMostrarLocalizacao(false);
                }}
                className="rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 font-semibold text-white shadow-xl transition-all hover:from-pink-500 hover:to-indigo-500"
              >
                <FaMagic className="mr-2 inline animate-bounce" /> Quero esse
                agora
              </button>

              <AnimatePresence>
                {formVisible === doce.id && (
                  <motion.div
                    ref={wrapperRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="relative mt-5 rounded-xl border border-white/30 bg-slate-900/90 p-5 backdrop-blur-xl"
                  >
                    <button
                      onClick={() => setFormVisible(null)}
                      className="absolute right-4 top-3 text-white hover:text-red-400"
                    >
                      <FaTimesCircle size={20} />
                    </button>

                    {/* Nome do cliente */}
                    <label className="mb-2 block text-sm">Seu nome:</label>
                    <input
                      type="text"
                      className="w-full rounded-lg p-2 text-black"
                      placeholder="Digite seu nome"
                      value={nomeCliente}
                      onChange={(e) => setNomeCliente(e.target.value)}
                    />

                    {/* Escolha do produto */}
                    <label className="mb-2 mt-4 block text-sm">
                      Escolha o doce:
                    </label>
                    <select
                      className="w-full rounded-lg p-2 text-black"
                      value={produtoEscolhido ?? ""}
                      onChange={(e) =>
                        setProdutoEscolhido(Number(e.target.value))
                      }
                    >
                      <option value="">Selecione</option>
                      {doces.map((op) => (
                        <option key={op.id} value={op.id}>
                          {op.nome} - {op.preco}
                        </option>
                      ))}
                    </select>

                    {/* Opção de retirada ou entrega */}
                    <div className="mt-4">
                      <label className="mb-2 block text-sm">
                        Como deseja receber?
                      </label>
                      <div className="flex gap-4">
                        <button
                          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${retirada === "local" ? "bg-green-600" : "bg-white/20"} border border-white/30 text-white`}
                          onClick={() => setRetirada("local")}
                        >
                          <FaStore /> Retirar no local
                        </button>
                        <button
                          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${retirada === "entrega" ? "bg-green-600" : "bg-white/20"} border border-white/30 text-white`}
                          onClick={() => setRetirada("entrega")}
                        >
                          <FaMapMarkerAlt /> Entrega em casa
                        </button>
                      </div>
                    </div>

                    {/* Campos de endereço se entrega */}
                    {mostrarLocalizacao && retirada === "entrega" && (
                      <div className="mt-4 space-y-3">
                        <label className="block text-sm">Rua:</label>
                        <input
                          type="text"
                          className="w-full rounded-lg p-2 text-black"
                          value={rua}
                          onChange={(e) => setRua(e.target.value)}
                          placeholder="Rua"
                        />

                        <label className="block text-sm">Número:</label>
                        <input
                          type="text"
                          className="w-full rounded-lg p-2 text-black"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                          placeholder="Número"
                        />

                        <label className="block text-sm">Bairro:</label>
                        <input
                          type="text"
                          className="w-full rounded-lg p-2 text-black"
                          value={bairro}
                          onChange={(e) => setBairro(e.target.value)}
                          placeholder="Bairro"
                        />

                        <label className="block text-sm">Cidade:</label>
                        <input
                          type="text"
                          className="w-full rounded-lg p-2 text-black"
                          value={cidade}
                          onChange={(e) => setCidade(e.target.value)}
                          placeholder="Cidade"
                        />
                      </div>
                    )}

                    {/* Botão enviar ou avançar */}
                    <button
                      onClick={enviarPedido}
                      className="text-md mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 p-3 font-bold text-white hover:from-cyan-500 hover:to-purple-500"
                    >
                      <FaWhatsapp />{" "}
                      {mostrarLocalizacao ? "Enviar Pedido" : "Avançar"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rodapé */}
      <footer className="mt-20 border-t border-white/10 pt-6 text-center text-xs text-white/60">
        <p>
          🌀 Experiência visual e sabor transcendental — &copy; 2025 Alucinohica
        </p>
      </footer>
    </div>
  );
}
