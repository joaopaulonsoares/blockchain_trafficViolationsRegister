import React, {Component} from 'react';
import MaterialTable from "material-table";

import Box from '@material-ui/core/Box';

class InfractionTransferingRequestedTable extends Component {

  _isTableMounted=false;
  columns = [
    { field: 'id', title: 'Id da Requisição', tooltip:'Id da requisição'},
    { field: 'ticketId', title: 'Id do Ticket', tooltip:'Id da infração'},
    { field: 'status', title: 'Status da requisição', tooltip:'Status da requisição( 0 -> Pending, 1 -> Accepted, 2 -> Rejected)'},
    { field: 'currentOwnerAddress', title: 'Infrator Atual', tooltip:'Atual autor da infração' },
    { field: 'requestedInfractorAddress', title: 'Transferir para', tooltip:'Motorista que se deseja transferir'},
  ] 
    
  constructor(props) {
    super(props);
    this.state = {
      isLoadingTable:true,
      page: 0,
      setPage: 0,
      rowsPerPage: 30,
      setRowsPerPage : 10,
      rows: [ ],
      totalCount:0,
      currentPage:1,
      loadingTransaction: false
    };
  }


  componentDidMount() {
    this._isTableMounted = true;
    //console.log(this.props)
    console.log(this.props)
    if(this._isTableMounted){
      //this.loadDataInTable( () => {
        this.setState({isLoadingTable:false});
      //});
    }
  }


  handleModalClose(){
    this.setState({loadingTransaction:false})
  }

  
    
  render(){
    const tableRef = React.createRef();

      return (
          <Box width="auto" display="inline">

              <MaterialTable
                columns={this.columns}
                tableRef={tableRef}
                data={this.props.rows}
                options={{
                  sorting: true,
                  exportButton: true,
                  exportAllData: true,
                  exportFileName: "infrações de trânsito",
                  pageSize:10,
                  pageSizeOptions:[5, 10, 20, 30, 40, 50, 100],
                  emptyRowsWhenPaging:false,
                  removable:true,
                  actionsColumnIndex: -1
                }}
                localization={{
                  body: {
                    emptyDataSourceMessage: 'Nenhum resultado encontrado'
                  },
                  toolbar: {
                    searchTooltip: 'Pesquisar',
                    searchPlaceholder: 'Pesquisar'
                  },
                  pagination: {
                    labelRowsSelect: 'Linhas',
                    labelDisplayedRows: ' {from}-{to} de {count}',
                    firstTooltip: 'Primeira página',
                    previousTooltip: 'Página Anterior',
                    nextTooltip: 'Próxima página',
                    lastTooltip: 'Última página'
                  }
                }}
                title={this.props.title}
                
                //onRowClick={(event, rowData, togglePanel) => togglePanel()}
              />

          </Box>
      )
    
  }
}

export default (InfractionTransferingRequestedTable);