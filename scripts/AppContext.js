import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [lanches, setLanches] = useState(
        [    
            {
            id: '1',
            name: 'Laranja',
            local: 'Mercado Lima',
            price: 'R$8,49',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDdmtlJT1cgwPdda4mAqua8S6gGj1dA1y8A&s',
      
          },
          {
            id: '2',
            name: 'Maçã',
            local: 'Mercado Lima',
            price: 'R$29,99',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDdmtlJT1cgwPdda4mAqua8S6gGj1dA1y8A&s',
          },
          {
              id: '3',
              name: 'Melancia',
              local: 'Mercado Lima',
              price: 'R$7,98',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSUIaBT8IyNqSvEVXvzPr7HPRlgmd3i0XSg&s',
          },
          {
              id: '4',
              name: 'Mamão',
              local: 'Mercado Lima',
              price: 'R$14,50/kg',
              img: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Mamao-Papaya[1]-1000x1000.jpg',
            },        
        ]
    )

        
    return <AppContext.Provider value={{ carrinho, setCarrinho, lanches, setLanches }}>
    {children}
</AppContext.Provider>;
}