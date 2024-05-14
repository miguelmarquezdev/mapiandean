import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-gradient-to-r from-slate-900 to-gray-700 xl:p-20 lg:p-20 sm:p-10 p-5 h-screen sm:h-screen lg:h-auto xl:h-auto">
        <div className="max-w-screen-md w-full mx-auto bg-primary p-10 rounded-3xl">
          <section className="bg-mainbanner w-full h-72 rounded-xl bg-cover bg-center"></section>
          <section div className="flex w-full justify-center -mt-20">
            <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center shadow-lg">
              <Image
                src="/img/machu-picchu-andean-logo.svg"
                width={120}
                height={200}
                alt="diseño web"
                className=""
              />
            </div>
          </section>
          <section className="py-5 flex flex-col gap-2 mb-5">
            <h1 className="text-white text-center font-semibold text-2xl">Machu Picchu Andean</h1>
            <h2 className="text-white text-center text-sm font-light">Expertos en viajes por todo el PERU 🌎✈️</h2>
          </section>
          <section className="flex flex-col gap-5">
          <a href="https://machupicchu-andean.com" className="border-2 rounded-full text-white w-full block text-center py-4 hover:bg-white/5 transition-all duration-300">WEB PRINCIPAL</a>
          <a href="https://www.facebook.com/MachupicchuAndean" className="border-2 rounded-full text-white w-full block text-center py-4 hover:bg-white/5 transition-all duration-300">FACEBOOK</a>
          <a href="https://www.instagram.com/machupicchuandeanperu/" className="border-2 rounded-full text-white w-full block text-center py-4 hover:bg-white/5 transition-all duration-300">INSTAGRAM</a>
          </section>
        </div>
      </main>
    </div>
  );
}
