import GetFilms from '../API'
export default function Home() {
  return (
    <>
      <h2>Tranding today</h2>
      <p>{GetFilms}</p>
        <ul></ul>
    </>
  );
}