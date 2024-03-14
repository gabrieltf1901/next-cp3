import CardFilm from "./Components/CardFilm";

export default function Home() {
  return (
    <main className="flex-auto">

      <CardFilm
        title="Oppenheimer"
        img="./oppenheimer-cartaz.png"
        link="https://www.youtube.com/watch?v=bK6ldnjE3Y0"
      />
      <CardFilm 
        title="Gato de Botas 2"
        img="./gatodebotas-cartaz.png"
        link="https://www.youtube.com/watch?v=sLk94T-hS78"
      />
      <CardFilm 
        title="Resistencia"
        img="./resistencia-cartaz.png"
        link="https://www.youtube.com/watch?v=D4Up_BARN8A"
      />
      <CardFilm 
        title="A Chamada"
        img="./achamada-cartaz.png"
        link="https://www.youtube.com/watch?v=yndSDKNrhkE"
      />
      <CardFilm 
        title="O Acusado"
        img="./oacusado-cartaz.png"
        link="https://www.youtube.com/watch?v=HvWCrdDz5pE"
      />
      <CardFilm 
        title="Gemini"
        img="./gemini-cartaz.png"
        link="https://www.youtube.com/watch?v=sEzgKWRWUXE"
      />
    </main>
  );
};