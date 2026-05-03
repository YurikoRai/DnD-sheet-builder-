import { StatsBlock } from "../widgets/StatsBlock/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-serif font-bold text-stone-800 border-b-2 border-stone-800 pb-2">
          Лист Персонажа
        </h1>

        {/* Сюда потом добавим шапку с именем, классом и расой */}

        <section>
          <h2 className="text-2xl font-bold mb-4">Характеристики</h2>
          <StatsBlock />
        </section>
      </div>
    </main>
  );
}
