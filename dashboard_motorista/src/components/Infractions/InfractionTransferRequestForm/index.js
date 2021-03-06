
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

const useStyles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: "theme.palette.common.white",
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },

  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  tableRoot: {
    width: "100%",
  },
  tableWrapper: {
    overflow: "auto",
  },
});


class InfractionTransferRequestForm extends Component {
  constructor(props){
        super(props);
        this.state = { 
            ticketId:"",
            requestedInfractorAddress:"",
            waitingRegisterRequest:false,
            requestMadeSuccesfull:false,
            request:""
        };
        this.handleTicketId = this.handleTicketId.bind(this);
        this.handleRequestedInfractorAddress = this.handleRequestedInfractorAddress.bind(this);
        this.registerTransferInfractionRequest = this.registerTransferInfractionRequest.bind(this);
        this.submitCreateSessionForm = this.submitCreateSessionForm.bind(this);
    }


    handleTicketId = (e) => {
        this.setState({ticketId: e.target.value});
    };  
    
    handleRequestedInfractorAddress = (e) => {
        this.setState({requestedInfractorAddress: e.target.value});
    };

    async registerTransferInfractionRequest(){
        var ticketId = this.props.ticket.id;
        var requestedInfractorAddress = this.state.requestedInfractorAddress;

        this.setState({waitingRegisterRequest:true});
        
        const registerRequest = await this.props.contract.methods.registerTransferTicketRequest(ticketId,requestedInfractorAddress).send({ from: this.props.account })
        .on('transactionHash', function(hash){
            //console.log("hash", hash)
        })

        if(registerRequest.status){
            this.setState({request:registerRequest, requestMadeSuccesfull:true});
        }else{
            window.alert("Erro ao requisitar transferência de infração. Tente novamente mais tarde" );
        }

        this.setState({requestMadeSuccesfull:true, waitingRegisterRequest:false,  ticketId:"", explanation:"",});
    }

    async submitCreateSessionForm(event){
        event.preventDefault();
        await this.registerTransferInfractionRequest();
    };

    render(){
        const { classes } = this.props;

        if(this.state.requestMadeSuccesfull){
            return (<Alert severity="success">Solicitação Registrada com sucesso no bloco {this.state.request.blockNumber} na transação {this.state.request.transactionHash}. </Alert>)
        }

        return(
        <Box width={"100%"} display="flex" justifyContent="center">
            <Box width={"80%"}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" paddingBottom={4}>
                            <Typography variant="h5" color="textSecondary">Transferir Infração</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="block" justifyContent="flex-start" >
                            <TextField
                            label="Id da Infração" 
                            className={classes.inputBorderColor}
                            fullWidth={true}
                            id="infractionIdField"
                            variant="outlined"
                            color="primary"
                            onChange={(e)=>{this.handleTicketId(e)}}
                            value={this.props.ticket.id}
                            disabled
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="block" justifyContent="flex-start" >
                            <TextField
                            label="Chave do motorista recebedor da infração" 
                            className={classes.inputBorderColor}
                            fullWidth={true}
                            id="requestedInfractorAddressField"
                            variant="outlined"
                            color="primary"
                            onChange={(e)=>{this.handleRequestedInfractorAddress(e)}}
                            value={this.state.requestedInfractorAddress}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" paddingTop={2} paddingBottom={2}>
                            {this.state.waitingRegisterRequest ? 
                                (<div><CircularProgress></CircularProgress><br></br><Typography variant="body" color="textSecondary">Transação em andamento</Typography> </div>)
                                 : 
                                ( <Button variant="contained" onClick={(e) => { this.submitCreateSessionForm(e) }}>Solicitar transferência</Button> ) }
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Box>

        )
    }


}

export default withStyles(useStyles)(InfractionTransferRequestForm);