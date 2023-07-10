import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(getFilter(e.target.value));
  };

  return (
    <form className="mb-4 flex justify-center items-center mx-auto flex-col max-w-sm">
      <label className="block mb-2 font-bold self-start" htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-[384px]"
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
      />
    </form>
  );
};
