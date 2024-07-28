import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Items';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

function App() {
  const [list, setList] = useState(items);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financeiro Bruno</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de informação*/}

        {/* area de inserção*/}

        {/* area de itens*/}


      </C.Body>
    </C.Container>

  );
}

export default App;