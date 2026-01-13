// import {Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from '@/Components/ShadCn/pagination';

// const CustomPagination = () => {
//   return (
//     <Pagination className='mt-3'>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationNext href='#' />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href='#'>1</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href='#' isActive>
//             2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href='#'>3</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationEllipsis />
//         </PaginationItem>

//         <PaginationItem>
//           <PaginationPrevious href='#' />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   );
// };

// export default CustomPagination;


import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/Components/ShadCn/pagination';

interface CustomPaginationProps {
  page: number;
  setPage: (p: number) => void;
  totalPages: number;
}

const CustomPagination = ({ page, setPage, totalPages }: CustomPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className='mt-3'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href='#' 
            onClick={(e) => { e.preventDefault(); if(page > 1) setPage(page - 1); }} 
          />
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink 
              href='#' 
              isActive={p === page} 
              onClick={(e) => { e.preventDefault(); setPage(p); }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext 
            href='#' 
            onClick={(e) => { e.preventDefault(); if(page < totalPages) setPage(page + 1); }} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
