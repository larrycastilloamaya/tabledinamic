import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    sticky: "left"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    sticky: "left"
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  }
];
