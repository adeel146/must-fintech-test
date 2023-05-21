import { Table } from "antd";
import { useState } from "react";
import "./index.css";
import BackVector from "../../assets/icons/BackVector";
import ForwardVector from "../../assets/icons/ForwardVector";
import { columns, data } from "../../utilis/constants";

const CustomTable = ({ setSelectedRows }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys) => {
    const selectedRows = data.filter((_, index) =>
      selectedRowKeys.includes(index)
    );
    setSelectedRows(selectedRows);
    setSelectedRowKeys(setSelectedRowKeys);
  };

  console.log(selectedRowKeys, "selectedRowKeys");

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? "light-row" : "dark-row";
  };

  const renderEmptyComponent = () => (
    <div
      style={{
        textAlign: "center",
        minHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      조회 결과가 없습니다.
    </div>
  );
  return (
    <Table
      rowClassName={getRowClassName}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      locale={{
        emptyText: renderEmptyComponent, // Custom message when there is no data
      }}
      pagination={{
        position: ["bottomCenter"],
        showSizeChanger: false,
        pageSizeOptions: [],
        showTotal: (total, range) => ``,
        itemRender: (page, type, originalElement) => {
          if (type === "prev") {
            return (
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BackVector />
                <div style={{ width: "30px", height: "20px" }}>
                  {originalElement}
                </div>
              </div>
            );
          }
          if (type === "next") {
            return (
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "30px", height: "20px" }}>
                  {originalElement}
                </div>
                <ForwardVector />
              </div>
            );
          }

          return originalElement;
        },
        defaultPageSize: 10,
      }}
      // scroll={{ x: "calc(700px + 50%)", y: 240 }}
    />
  );
};
export default CustomTable;
