import { Grid } from "@mui/material";
import { Tag } from "antd";
import {
  AccountColumns,
  UserColumns,
  TicketHistory,
  SchoolColumns,
  Students
} from "./columns";
import { useEffect, useState } from "react";
import * as _ from "lodash";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const SLTable = (props: any) => {
  const { page, rows } = props;
  const [originalData, setOriginalData] = useState(rows);
  const [sortedData, setSortedData] = useState(rows);
  const [columns, setColumns] = useState([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    switch (page) {
      case "Account":
        setColumns(AccountColumns);
        break;
      case "School":
        setColumns(SchoolColumns);
        break;
      case "User":
        setColumns(UserColumns);
        break;
      case "TicketHistory":
        setColumns(TicketHistory);
        break;
      case "Students":
        setColumns(Students);
        break;
      default:
        setColumns(AccountColumns);
        break;
    }
  }, []);

  const getAscendingOrder = (rowData: any) => {
    let data = originalData;
    let columnsTemp: any = columns;
    data.sort((a: any, b: any) => {
      const nameA = a[rowData.dataIndex].toLowerCase();
      const nameB = b[rowData.dataIndex].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortedData([...data]);
    let index = _.findIndex(columnsTemp, { dataIndex: rowData.dataIndex });
    columnsTemp[index].order = "asce";
    setColumns(columnsTemp);
  };

  const getDescendingOrder = (rowData: any) => {
    let data = originalData;
    let columnsTemp: any = columns;

    data.sort((a: any, b: any) => {
      const nameA = a[rowData.dataIndex].toLowerCase();
      const nameB = b[rowData.dataIndex].toLowerCase();

      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    setSortedData([...data]);
    let index = _.findIndex(columnsTemp, { dataIndex: rowData.dataIndex });
    columnsTemp[index].order = "desc";
    setColumns(columnsTemp);
  };

  const handleSort = (rowData: any, type: string) => {
    if (type === "asce") {
      getAscendingOrder(rowData);
    } else {
      getDescendingOrder(rowData);
    }
  };

  const displaySearch = () => {
    setShowInput(!showInput);
  };

  const wildcardSearch = (e: any, dataIndex: string) => {
    const { value } = e.target;
    let columnsTemp: any = columns;
    let data: any = originalData
    let index = _.findIndex(columnsTemp, { dataIndex: dataIndex });
    columnsTemp[index].input = value;
    columnsTemp.map((row: any) => {
      const regex = new RegExp(dataIndex === 'Status' ? `^${row.input}` : row.input, 'i');
      data = data.filter((item: any) => regex.test(item[row.dataIndex]));
    })
    setSortedData([...data])

    setColumns(columnsTemp);
  }

  const renderHeaderData = () => {
    return (
      columns.length &&
      columns.map((th: any, index: number) => (
        <th key={index}>
          <div className="header">
            <div>{th.title}</div>

            <div className="searchDiv">
              {th.sort && (
                <div className="iconsDiv">
                  <CaretUpOutlined
                    className={
                      th.order === "asce" ? "iconActive" : "iconInActive"
                    }
                    onClick={() => handleSort(th, "asce")}
                  />
                  <CaretDownOutlined
                    className={
                      th.order === "desc" ? "iconActive" : "iconInActive"
                    }
                    onClick={() => handleSort(th, "desc")}
                  />
                </div>
              )}
            </div>
          </div>
          {showInput && (
            <input
              type="text"
              placeholder="Search..."
              className={`searchInput`}
              onChange={(e) => wildcardSearch(e, th.dataIndex)}
            />
          )}
        </th>
      ))
    );
  };

  const onRowClick = (row: any) => {
    props?.handleClick(row)
  }

  const rendercolumnData = (row: any, column: any) => {
    const { dataIndex, edit, type, title, isLink } = column;
    return dataIndex === "Status" ? (
      <td>
        <p>
          <Tag color={row[dataIndex] === "Active" ? "success" : "warning"}>
            {row[dataIndex]}
          </Tag>
        </p>
      </td>
    ) : dataIndex === "StudentAction" ?
      <td>
        {
          isLink ? <a><p>View Adjustments</p></a> : <p>View Adjustments</p>
        }

      </td>
      :
      <td>
        {edit === true && type === "string" ?
          <input defaultValue={row[dataIndex]} />
          :
          isLink ?
            <p className="table_link">
              <div onClick={() => onRowClick(row)}>
                {row[dataIndex]}
              </div>
            </p> :
            <p>{row[dataIndex]}</p>
        }
      </td>
      ;
  };

  return (
    <Grid item md={12} sm={12} xs={12}>
      <table className="myTable">
        <thead>
          <tr>{renderHeaderData()}</tr>
        </thead>
        <tbody>
          {sortedData.map((row: any, index: any) => (
            <tr key={`page-${index}`}>
              {columns.length &&
                columns.map((column: any) => (
                  <>{rendercolumnData(row, column)}</>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
};

export default SLTable;
