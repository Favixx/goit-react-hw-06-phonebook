import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(getFilter(e.target.value));
  };

  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
};