export default function Home() {

  return (
    <>
    <section>
      <textarea defaultValue={process.cwd()} />
      <textarea defaultValue={__dirname} />
      </section>
    </>
  );
}
