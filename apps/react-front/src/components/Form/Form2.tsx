import { Link } from 'react-router-dom';
import './Form.modules.css';

export default function Form2({
  setSteps,
}: {
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSteps(3);
  };

  return (
    <form
      action=""
      className="flex flex-col items-center md:items-end input mx-auto text-pastel font-Marcellus text-lg"
    >
      {/* Este es el div de first name */}
      <div className="flex mt-6 md:mt-12 gap-8">
        <label htmlFor="firstname" className="mt-2">
          <img src="/public/svg/Vector-3.svg" alt="" />
        </label>

        <input
          placeholder="FIRST NAME"
          id="firstname"
          type="text"
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
        />
      </div>

      {/* Este es el div de lastname */}
      <div className="flex mt-6 md:mt-12 gap-8">
        <label htmlFor="lastname" className="mt-2">
          <img src="/public/svg/Vector-3.svg" alt="" />
        </label>

        <input
          placeholder="LAST NAME"
          type="text"
          id="lastname"
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
        />
      </div>

      {/* Este es el div de phone */}
      <div className="flex mt-6 md:mt-12 gap-8 justify-between contenedor">
        <div className="flex gap-8">
          <label htmlFor="phone" className="mt-2">
            <img src="/public/svg/phone.svg" alt="" />
          </label>

          <input
            placeholder="PHONE"
            type="text"
            id="phone"
            className="w-5/6 md:w-full bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>

        <select
          name="phone"
          id="phone"
          className="bg-pastel text-blacke rounded-lg px-4 select text-xl select"
        >
          <option className="mx-0" value="movil">
            MOVIL
          </option>
          <option className="mx-0" value="telefono">
            TELEFONO
          </option>
        </select>
      </div>

      {/* Este es el div de street */}
      <div className="flex mt-6 md:mt-12 justify-between contenedor flex-col sm:flex-row">
        <div className="flex gap-8">
          <label htmlFor="street">
            <img src="/public/svg/ubicacion.svg" alt="" />
          </label>

          <input
            type="text"
            placeholder="STREET"
            id="street"
            className="input2 bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>

        <div className='inline-flex gap-8 mt-6 md:mt-0'>
          <label htmlFor="city">
            <img src="/public/svg/ubicacion.svg" alt="" className='sm:hidden' />
          </label>
          <input
            type="text"
            placeholder="CITY"
            className="input3 bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>

        <div className='inline-flex gap-8 mt-6 md:mt-0'>
          <label htmlFor="zip">
            <img src="/public/svg/ubicacion.svg" alt="" className='sm:hidden' />
          </label>

          <input
            type="text"
            placeholder="ZIP CODE"
            className="input3 bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>
      </div>

      {/* Estos son los botones */}
      <div className="mt-16 inline-flex gap-4">
        <Link to="/login">
          <button className="button px-8 py-1 bg-pastel text-blacke mr-4 first-letter:text-xl">
            CANCEL
          </button>
        </Link>

        <Link to="/login">
          <button
            onClick={handleSubmit}
            className="button px-8 py-1 bg-pastel text-blacke first-letter:text-xl"
          >
            NEXT
          </button>
        </Link>
      </div>
    </form>
  );
}
