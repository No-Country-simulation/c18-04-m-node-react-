import { Link } from 'react-router-dom';
import './Form.modules.css';

export default function Form3({ setSteps }: { setSteps: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <form
      action=""
      className="flex flex-col items-end input mx-auto text-pastel font-Marcellus text-lg"
    >
      <div className="flex mt-12 gap-8">
        <label htmlFor="lawyerid" className="mt-2">
          <img src="/public/svg/lawyer-id.svg" alt="" />
        </label>

        <input
          placeholder="LAWYER ID"
          id="lawyerid"
          type="password"
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
        />
      </div>

      <div className="mt-80 inline-flex gap-4">
        <Link to="/login">
          <button className="button px-4 py-1 bg-pastel text-blacke mr-4 first-letter:text-xl">
            CANCEL
          </button>
        </Link>

        <Link to="/login">
          <button className="button px-4 py-1 bg-pastel text-blacke first-letter:text-xl">
            CREATE USER
          </button>
        </Link>
      </div>
    </form>
  );
}
