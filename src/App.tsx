import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function VolpeMOC() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [showFullGallery, setShowFullGallery] = useState(false);
  const images = [
    "https://i.pinimg.com/736x/57/98/c0/5798c0eb09d5d855e80f1ba812fd12a8.jpg",
    "https://i.pinimg.com/736x/8b/57/d8/8b57d839ee0aafa412b1db3fcf47c145.jpg",
    "https://i.pinimg.com/736x/a6/92/8e/a6928e39c469d0c7a87291964801fbce.jpg",
    "https://i.pinimg.com/736x/76/8d/d7/768dd7224435db49fb1e97c971346473.jpg",
    "https://i.pinimg.com/736x/ed/aa/15/edaa1515544d547c197c3d5c80e0705c.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.yzvNDKNhRW7FRcbEBKYpvAHaJr&pid=Api",
    "https://i.pinimg.com/736x/7d/17/98/7d179809c4a76c0651126ea02d7c784f.jpg",
    "https://i.pinimg.com/736x/56/dd/65/56dd65651da6bbcfaa49f1c72d431ac8.jpg",
    "https://i.pinimg.com/736x/e5/de/7e/e5de7e90a57bd9a3c0cb792c7a7cdd2c.jpg",
    "https://i.pinimg.com/736x/71/33/d0/7133d0f8bba3e15dfcf57aae8c34a303.jpg",
    "https://i.pinimg.com/736x/69/ba/1b/69ba1ba3e9cb54324bb3eb464bee87b3.jpg",
    "https://i.pinimg.com/736x/99/77/ed/9977ed25db20fc7960e443ab2fd80ff5.jpg",
    "https://i.pinimg.com/736x/3f/7d/b3/3f7db31690bbba1f7ed9076c3223a735.jpg",
    "https://i.pinimg.com/736x/37/07/44/370744dc249b034c2b8d87e429db2d92.jpg",
    "https://i.pinimg.com/736x/32/24/a8/3224a832a6ad8adce5efeff1996ced4a.jpg",
    "https://i.pinimg.com/474x/28/43/f7/2843f7ef7f0596f72b4b2088ece925fc.jpg",
    "https://i.pinimg.com/736x/6c/48/7e/6c487e8674e4adc995439c401d9bf3b4.jpg",
    "https://i.pinimg.com/736x/95/5a/25/955a252f7f0780a29edddc6775abeeb3.jpg",
    "https://i.pinimg.com/736x/27/3c/16/273c16d2cae60e4b37be6c7e7b9abc17.jpg",
    "https://i.pinimg.com/736x/8b/1c/d4/8b1cd4b1dc4eae61dee2e06e1c3e21ab.jpg",
    "https://i.pinimg.com/736x/87/c7/ef/87c7ef7c2267beb4a4b09359b4d94aaa.jpg",
    "https://i.pinimg.com/736x/cd/fd/72/cdfd72750f3ce9e4d05c799c65df898a.jpg",
    "https://i.pinimg.com/736x/b8/71/49/b87149996c91100a5d17a0d5fd61f06b.jpg",
    "https://i.pinimg.com/736x/91/45/03/914503937c54a0b60a81a8f196ce5bb6.jpg",
    "https://i.pinimg.com/736x/f1/2f/48/f12f483832317cc1c9dd63752de40d33.jpg",
    "https://i.pinimg.com/736x/fe/c8/0b/fec80bdf826cc14ccc535a3da7cec512.jpg",
    "https://i.pinimg.com/736x/20/7c/2f/207c2f230be1ec4d697f439d409abb22.jpg",
    "https://i.pinimg.com/736x/6c/71/2a/6c712ab390cbcb075b5675794d250ca9.jpg",
    "https://i.pinimg.com/736x/42/a5/95/42a5950a0332b9a152096d1b85b6d967.jpg ",
  ];

  const images2 = [
 " https://i.pinimg.com/736x/9e/37/56/9e3756b6c41f8224b6d0a8bd6d36d52d.jpg",
 "https://i.pinimg.com/474x/b6/6e/03/b66e03e5af958e86825b9358c201a2a7.jpg ",
 " https://i.pinimg.com/736x/d6/9c/15/d69c159542c1ac8af8e8d031cc24d8e7.jpg",
 "https://i.pinimg.com/736x/7d/67/cf/7d67cf1d53440dd16500ff8f50681d1b.jpg ",
 " https://i.pinimg.com/736x/f6/f8/cc/f6f8cc50e6253fa02ef0afe983aef0a5.jpg",
    "https://i.pinimg.com/736x/65/e8/16/65e816bc812af9fab38e729e7e9915d3.jpg",
    "https://i.pinimg.com/736x/1b/b7/3e/1bb73e58a660d55639d6d11c85952ea7.jpg",
    "https://i.pinimg.com/1200x/10/e2/cf/10e2cf5ecec37636e9303b8a3dd13ebc.jpg",
    "https://i.pinimg.com/736x/87/53/52/8753522b32eab0766d143b756ab938ae.jpg",
    "https://i.pinimg.com/736x/af/38/ee/af38ee3fb4f709e35e5b8f965c4b4c8b.jpg",
    "https://i.pinimg.com/736x/cb/e3/0b/cbe30b6709b5ec0ac7cffab7f18ab1f3.jpg",
    "https://i.pinimg.com/736x/80/e2/92/80e2928ef2695a3c39f29d54ab6b239c.jpg",
    "https://i.pinimg.com/736x/61/1f/ac/611faca7b036abeb93e254f629259536.jpg",
    "https://i.pinimg.com/736x/db/80/f7/db80f76413ef14c36591fc291cf00ee3.jpg",
    "https://i.pinimg.com/736x/8f/71/b4/8f71b4d7af4273ebbc63586693ad78f1.jpg",
    "https://i.pinimg.com/736x/ef/36/29/ef36299454c808c12b08fc2e5c2079e7.jpg",
    "https://i.pinimg.com/736x/d4/b6/10/d4b61098290e3b05d2ef260bd3c825bb.jpg",
    "https://i.pinimg.com/736x/28/0b/2a/280b2ad8b9e8fe25f1b4ab53e9b81533.jpg",
    "https://i.pinimg.com/736x/b7/7a/63/b77a630b87dacff6dea1a0e62670f466.jpg",
    "https://i.pinimg.com/736x/b0/cf/8f/b0cf8f6a3c13815e1b431f79c9d2ba09.jpg",
    "https://i.pinimg.com/736x/a5/45/69/a545696b8c628827dca4e53f6111bb44.jpg",
    "https://i.pinimg.com/736x/63/5c/09/635c09337e65655707301bf5590a3b48.jpg",
    "https://i.pinimg.com/736x/72/4e/a2/724ea20f11e7eda193e1da1426f9a1b2.jpg",
    "https://i.pinimg.com/736x/21/62/67/216267990c5f8beb1349fae7bc12ad04.jpg",
    "https://i.pinimg.com/736x/d1/d6/2e/d1d62e8a5fb5dc3f644a79c6f169fe72.jpg",
    "https://i.pinimg.com/736x/e5/17/0f/e5170fe57494ea5d261394c61fa60d3e.jpg",
    "https://i.pinimg.com/736x/b4/4d/60/b44d603847bd7cbfd3313499c4cb73ed.jpg",
    "https://i.pinimg.com/736x/9c/ee/cf/9ceecfa7c1d35a103cb8305fe61c764f.jpg",
    "https://i.pinimg.com/736x/c6/8d/42/c68d42a4ac13729d211af7dd62ab1bad.jpg",
  ];

  const allImages = [...images, ...images2];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-800 to-black font-sans text-white">
      {/* Barra superior */}
      <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-black/20 px-6 py-2">
        <div className="text-lg font-bold tracking-wide text-yellow-100">
          VOLPE Sites
        </div>
        <div className="flex gap-9">
          <div className="flex justify-center">
            <a
              href="https://wa.me/554999102026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 px-10 py-2 text-lg text-black shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/40"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 pt-1  text-center">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeInOut" }}
          src="https://i.pinimg.com/1200x/ca/9a/77/ca9a77f282af199639c3604c6df96c80.jpg"
          alt="Background"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
        />
        <div className="z-100 relative max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-black tracking-wide text-white drop-shadow-[0_0_10px_#fff] md:text-8xl"
          ></motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mx-auto mt-6 max-w-xl text-xl text-gray-300"
          ></motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10"
          ></motion.div>
        </div>
      </section>

      {/* Galeria horizontal */}
      <section className="overflow-x-auto border-y border-zinc-300 bg-black px-1 py-24">
        <div className="flex min-w-max gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.4 }}
              onClick={() => setSelectedImage(src)}
              className="h-72 w-[12rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-yellow-500 shadow-lg transition-transform hover:ring-2 hover:ring-yellow-500/70"
            >
              <img
                src={src}
                alt={`preview-${index}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria horizontal 2 - com nova lista */}
      <section className="overflow-x-auto border-y border-zinc-300 bg-black px-1 py-24">
        <div className="flex min-w-max gap-6">
          {images2.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.4 }}
              onClick={() => setSelectedImage(src)}
              className="h-72 w-[12rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-pink-500 shadow-lg transition-transform hover:ring-2 hover:ring-pink-500/70"
            >
              <img
                src={src}
                alt={`preview2-${index}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="bg-[#292e2c] px-4 py-2 text-[#faf8f4]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          {/* LOGO + Dados médicos */}
          <div>
            <h1 className="mb-2 text-4xl font-light leading-none tracking-widest">
              <span className="block">VOL</span>
              <span className="block">PE</span>
            </h1>
            <p className="mt-2 text-xs text-[#f7f7f5]">
              Responsável técnico:
              <br />
              Cristiane E.E.Tebaldi
              <br />
              Sites
              <br />
              VOLPE
              <br />
            </p>
          </div>

          {/* Endereço */}
          <div className="text-xs text-white/80">
            <h3 className="mb-1 text-[10px] uppercase tracking-widest text-[#A89B93]">
              Endereço
            </h3>
            <p>
              Rua Campo Largo
              <br />
              SC Balneário Piçarras
            </p>
          </div>

          {/* Contato */}
          <div className="text-xs text-white/80">
            <h3 className="mb-1 text-[10px] uppercase tracking-widest text-[#A89B93]">
              Contato
            </h3>
            <p>WhatsApp: (49) 99102026</p>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-1 text-[10px] uppercase tracking-widest text-[#A89B93]">
              Acompanhe
            </h3>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/volpeapp?igsh=MTU3MXR2dXlsOTZwZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#CBBBA5] p-1 transition hover:bg-[#CBBBA5]/10"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="h-4 w-4"
                />
              </a>
              <a
                href="https://wa.me/554999102026"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#CBBBA5] p-1 transition hover:bg-[#CBBBA5]/10"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="h-4 w-4"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-4 flex flex-col items-center justify-between gap-1 border-t border-white/10 pt-2 text-xs text-white/40 md:flex-row">
          <div className="flex gap-3">
            <a href="#" className="hover:text-white/70">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white/70">
              Aviso de Privacidade
            </a>
          </div>
          <span> Guilherme Tebaldi </span>
        </div>
      </footer>
      <div className="flex items-center justify-center gap-3 py-4"></div>

      {/* Botão flutuante de galeria */}

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowFullGallery(true)}
          className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-105"
        >
          Ver Galeria Completa
        </button>
      </div>

      {/* Galeria fullscreen com transição */}
      <AnimatePresence>
        {showFullGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 top-0 z-[999] flex h-screen w-screen flex-col items-center overflow-y-auto bg-black/90 px-6 py-10 backdrop-blur-md"
          >
            <motion.button
              onClick={() => setShowFullGallery(false)}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 self-end text-lg font-bold text-yellow-300 hover:underline"
            >
              ← Voltar
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            >
              {allImages.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  className="cursor-pointer overflow-hidden rounded-xl border border-yellow-500 shadow-lg"
                  onClick={() => {
                    setSelectedImage(src);
                    setSelectedIndex(index);
                  }}
                >
                  <motion.img
                    src={src}
                    alt={`full-${index}`}
                    whileHover={{ scale: 1.15, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-60 w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagem ampliada com navegação */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 text-3xl font-bold text-white hover:text-yellow-400"
            >
              ✕
            </button>

            {selectedIndex !== null && selectedIndex > 0 && (
              <button
                onClick={() => {
                  const prev = selectedIndex - 1;
                  setSelectedIndex(prev);
                  setSelectedImage(allImages[prev]);
                }}
                className="absolute left-6 text-5xl font-bold text-white hover:text-yellow-300"
              >
                ←
              </button>
            )}

            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Imagem ampliada"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-h-[90vh] max-w-4xl rounded-xl object-contain shadow-2xl"
            />

            {selectedIndex !== null && selectedIndex < allImages.length - 1 && (
              <button
                onClick={() => {
                  const next = selectedIndex + 1;
                  setSelectedIndex(next);
                  setSelectedImage(allImages[next]);
                }}
                className="absolute right-6 text-5xl font-bold text-white hover:text-yellow-300"
              >
                →
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
