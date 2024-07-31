import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Items';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

function App() {
  const [list, setList] = useState(items);
  const [filteredList, steFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); /* data , mes atual */

  useEffect(() => {
    steFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financeiro Bruno</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de informação*/}

        {/* area de inserção*/}

        <TableArea list={filteredList} />


      </C.Body>
    </C.Container>

  );
}

export default App;