import React from 'react';
import { Container } from './styled';

const Pagination = ({ limit, total, offSet, setOffSet }) => {
  const max_items = 3;
  const max_left = (max_items - 1) / 2;

  const actual_page = offSet ? offSet / limit + 1 : 1;
  const total_pages = Math.ceil(total / limit);
  const first_page = Math.max(total_pages - (max_items - 1), 1);
  const first = Math.min(Math.max(actual_page - max_left, 1), first_page);

  return (
    <Container>
      <li>
        <button
          onClick={() => setOffSet((actual_page - 2) * limit)}
          disabled={actual_page === 1}
        >
          &#60;
        </button>
      </li>
      {Array.from({ length: Math.min(max_items, total_pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            {actual_page === page ? (
              <button disabled>{page}</button>
            ) : (
              <button onClick={() => setOffSet((page - 1) * limit)}>
                {page}
              </button>
            )}
          </li>
        ))}
      <li>
        <button
          onClick={() => setOffSet(actual_page * limit)}
          disabled={actual_page === total_pages}
        >
          &#62;
        </button>
      </li>
    </Container>
  );
};

export default Pagination;