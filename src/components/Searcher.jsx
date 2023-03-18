import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearch } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearchValue = ({ target: { value } }) => {
    dispatch(setSearch(value));
  }

  return <Input.Search placeholder='Search...' onChange={handleSearchValue} />
};

export default Searcher;