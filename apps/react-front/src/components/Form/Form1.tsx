import { Link } from 'react-router-dom';
import './Form.modules.css';

export default function Form1({ setSteps }: { setSteps: React.Dispatch<React.SetStateAction<number>> }) {

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setSteps(2);
  }

  return (
    <form
      action=""
      className="flex flex-col items-center sm:items-end input mx-auto text-pastel font-Marcellus text-lg"
    >
      {/* Este es el div de first name */}
      <div className="flex mt-12 gap-8">
        <label htmlFor="username" className="mt-2">
          <img src="/public/svg/Vector-3.svg" alt="" />
        </label>

        <input
          placeholder="USER NAME"
          id="username"
          type="text"
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
        />
      </div>

      {/* Este es el div de password */}
      <div className="flex mt-12 gap-8">
        <label htmlFor="password1" className="mt-2">
          <img src="/public/svg/Vector-2.svg" alt="" />
        </label>

        <input
          placeholder="PASSWORD"
          type="password"
          id="password1"
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
        />
      </div>

      {/* Este es el div de repeat password */}
      <div className="">
        <div className='flex mt-12 gap-8'>
          <label htmlFor="password2" className="mt-2">
            <img src="/public/svg/Vector-2.svg" alt="" />
          </label>

          <input
            placeholder="REPEAT PASSWORD"
            type="password"
            id="password2"
            className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>
      </div>

      {/* Este es el div de email */}
      <div className='flex '>
        <div className="flex mt-12 gap-8">
          <label htmlFor="email" className="mt-2">
            <img src="/public/svg/vector-1.svg" alt="" />
          </label>

          <input
            placeholder="EMAIL"
            type="email"
            id="email"
            className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
          />
        </div>
      </div>

      <div className='mt-12 inline-flex gap-4'>
        <Link to="/login">
          <button className="button px-8 py-1 bg-pastel text-blacke mr-4 first-letter:text-xl">
            CANCEL
          </button>
        </Link>

        <Link to="/login">
          <button onClick={handleSubmit} className="button px-8 py-1 bg-pastel text-blacke first-letter:text-xl">
            NEXT
          </button>
        </Link>
      </div>

    </form>
  );
}
