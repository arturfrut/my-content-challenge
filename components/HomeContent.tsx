import React from 'react';

const HomeContent = ({ data }) => {
  if (!data) return <div>Cargando...</div>;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1>Make&nbsp;</h1>
        <h1 style={{ color: 'violet' }}>beautiful&nbsp;</h1>
        <br />
        <h1>
          websites regardless of your design experience.
        </h1>
        <h2 className="mt-4">
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div>
        <h1>Datos de la Hoja de Cálculo</h1>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </section>
  );
};

export default HomeContent;