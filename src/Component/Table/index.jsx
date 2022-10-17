import React,{useState} from "react";
import { usePagination, useRowSelect,useFilters, useTable,useSortBy } from "react-table";
import { FiChevronLeft, FiChevronRight,FiChevronDown,FiChevronUp } from "react-icons/fi";
import Select from "../Select";
import Tooltip from "../ToolTip";
import { ClipLoader } from "react-spinners";

import { useEffect } from "react";



function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {


  return (
    <div className="mx-3 my-2">
    <input className="appearance-none
     px-4 
     w-full
      font-semibold
       text-gray-800 focus:outline-none  rounded-xl py-3 
    "
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value)

        // Set undefined to remove the filter entirely
      }}
      placeholder={`جستجو `}
    />
</div>
   

  )
}




const Table = ({ columns, data,pagination,onChange,loading,showFilter,
  pageCount: controlledPageCount,maxHeight
}) => {


  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const [initial,setInitial]=useState(false);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    canPreviousPage,
    canNextPage,
    pageOptions,
    rows,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize,globalFilter,sortBy,filters  },
  } = useTable(
    {
      defaultColumn, // Be sure to pass the defaultColumn option
      columns,
      manualPagination: true, 
      manualFilters:true,
      manualSortBy:true,
      defaultCanFilter:false,
      pageCount: controlledPageCount,


      data: data || [],
      initialState: { pageIndex: 0 },
    },

    useFilters, // useFilters!
    useSortBy,
    usePagination,
    useRowSelect,

  );


  React.useEffect(()=>{
    if (!onChange)
    return;

    var data={pageIndex:pageIndex,pageSize:pageSize};
    if (sortBy && sortBy.length>0)
    {
      data.sortBy=sortBy[0];
    }

    data.filters=filters;
    onChange(data)

  },[pageIndex,pageSize,sortBy])


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {

    var data={pageIndex:pageIndex,pageSize:pageSize};
    if (sortBy && sortBy.length>0)
    {
      data.sortBy=sortBy[0];
    }
    data.filters=filters;
    
    if (onChange)
    {
      if (initial==false)
      {
        setInitial(true);
        return;
      }
    onChange(data)
    }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [filters])



  return (
    <div className="h-full  overflow-auto scrollbar ">
      <div>
       
          <div className="   overflow-x-auto 	scrollbar h-full" >
        {loading &&  <div style={{ height: 50 }} className="mx-2 mb-1  flex justify-center items-center">
        <div className="p-4 mb-4 text-sm   "/>
          <span className="px-4"> Loading data please wait  </span>
              <ClipLoader size={15} color={'blue'} />
            </div>
            }
 

      
            <table 
              {...getTableProps()}
              className="w-full z-0 font-semibold h-auto text-gray-800"
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="w-full h-10 font-extrabold text-large bg-GridHeaderColor "
                  >
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps({
                        style: { minWidth: column.minWidth, width: column.width },
                      })}
                        className=" text-center font-medium  "
                      >


            <div className="flex   items-center justify-start"  {...column.getHeaderProps(column.getSortByToggleProps())}>
                              {column.render('Header')}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? <FiChevronDown className="w-4 h-4 text-red-500 m-auto " />
                                    : <FiChevronUp className="w-4 h-4 m-auto text-red-500" />
                                  : (
                                    <FiChevronUp className="w-4 h-4 m-auto text-gray-400 opacity-0 group-hover:opacity-100" />
                                  )}
                              </span>
  
                    
                            </div>


                      {showFilter && column.canF && 
                      
                       column.render('Filter')
                      
                      } 



                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="border-b h-20 last:border-0 text-sm"
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className=" text-center last:border-0 font-medium overflow-x-auto"
                            style={{ height: "inherit" }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>

          
          </div>




          {(data?.length === 0  && loading===false)&&
          <div
          />
        }
      
        {data?.length !== 0 && pagination && (
          <div className="flex  items-center flex-wrap justify-end mt-12 border-t border-borderSolid gap-4">
            <div className="flex flex-wrap gap-4 items-center py-2 px-4 rounded-lg justify-end mt-2 mx-auto md:mx-0">
              <div className="flex items-center justify-end mx-auto sm:mx-0">
              <Select
                className="mx-auto sm:mx-0"
                value={pageSize}
                title="Rows per page"
                pageSize={pageSize}
                onSelectChange={(value) => {
                  setPageSize(Number(value));
                }}
              />
              
                <span className="text-title  pl-4">
                 
                  <strong className="mr-1">
                    {pageIndex + 1} <span className="mx-1">-</span>{" "}
                    {pageOptions.length}
                  </strong>
                </span>
                <span className="text-black tracking-wider  sm:mr-2">
                  of
                  <strong> {rows.length}  </strong>
                </span>
                
              </div>
              <Tooltip content="صفحه ی بعدی" disabled={!canNextPage}>
                  <div>
                    <FiChevronLeft
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      size={24}
                      className={`hover:scale-110 transition duration-100 ${
                        canNextPage
                          ? "cursor-pointer stroke-persian-blue-700"
                          : "stroke-dusty-gray-600"
                      }`}
                    />
                  </div>
                </Tooltip>
              
              <Tooltip content="Befor page" disabled={!canPreviousPage}>
                  <div>
                    <FiChevronRight
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                      size={24}
                      className={`hover:scale-110 transition duration-100 ${
                        canPreviousPage
                          ? "cursor-pointer stroke-persian-blue-700"
                          : "stroke-dusty-gray-600"
                      }`}
                    />
                  </div>
                </Tooltip>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
