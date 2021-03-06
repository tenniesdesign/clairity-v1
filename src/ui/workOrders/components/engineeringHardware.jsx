import React from 'react'
import Settings from '../../shared/components/settings'
import Layout from '../../shared/components/layout'
import DropDown from '../../shared/components/dropDown'
import Details from '../../shared/components/details'
import {
  RadioButtonGroup,
  RadioButton,
  Checkbox,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  IconButton,
  Toggle,
  Slider,
  DropDownMenu,
  DatePicker,
  TextField,
  Paper
} from 'material-ui'

import controllable from 'react-controllables'
import _ from 'lodash'

@controllable(['popRouterInventoryTypeId', 'radiosConfigured', 'voiceCpeInventoryTypeId', 'voiceCpeConfigured', 'otherInventoryTypeId', 'otherConfigured', 'voiceHandoffType', 'masterRadioMac', 'slaveRadioMac', 'frequency', 'transeiverSerialNumber', 'btsSerialNumber', 'popRouterPortsAssigned', 'voiceProvisioningComplete', 'hardwareNotes'])

class EngineeringHardwareView extends React.Component {

  style() {
    return {}
  }

  submit() {
    this.props.onSubmit(this.props)
  }

  getRouters() {
    return [
      { label: '', value: 1000, key: 51},
      { label: 'Cisco 7600 Series Router', value: 51, key: 51},
      { label: 'Canopy PTP 500', value: 50, key: 50},
      { label: 'Cisco 7300 Series Router', value: 33, key: 33},
      { label: 'Cisco 2600 Series Router', value: 37, key: 37},
      { label: 'ATI Rapier 24i Switch', value: 47, key: 47},
      { label: 'Adaptive Broadband', value: 52, key: 52},
      { label: 'Cisco 3845 Series Router', value: 63, key: 63},
      { label: 'Cisco 4700 Series Router', value: 43, key: 43},
      { label: 'Dragonwave', value: 21, key: 21},
      { label: 'BridgeWave 60Ghz', value: 11, key: 11},
      { label: 'LigoWave 900MHz', value: 45, key: 45},
      { label: 'Cisco 3500 Series Switch', value: 29, key: 29},
      { label: 'Cisco ASA 5510', value: 62, key: 62},
      { label: 'Nortel Baystack 350 Switch', value: 48, key: 48},
      { label: 'Cisco 3640 Series Router', value: 46, key: 46},
      { label: 'Motorola PTP 58400 Lite', value: 55, key: 55},
      { label: 'LigoWave 5GHz', value: 44, key: 44},
      { label: 'Gemini', value: 3, key: 3},
      { label: 'Cisco 7200 Series Router', value: 32, key: 32},
      { label: 'Trango M900', value: 16, key: 16},
      { label: 'Cisco 1900 Series Switch', value: 27, key: 27},
      { label: 'Canopy PTP 600', value: 39, key: 39},
      { label: 'Reignwire', value: 13, key: 13},
      { label: 'Tranzeo TR5a', value: 53, key: 53},
      { label: 'Canopy', value: 2, key: 2},
      { label: 'Wilibox', value: 14, key: 14},
      { label: 'Cisco 3550 Series Switch', value: 30, key: 30},
      { label: '3Com Intellijack', value: 18, key: 18},
      { label: 'Ubiquiti Nanostation M5', value: 66, key: 66},
      { label: 'Cisco 800 Series Router', value: 67, key: 67},
      { label: 'Ceragon', value: 15, key: 15},
      { label: 'Cisco IAD 2400', value: 59, key: 59},
      { label: 'Cisco 2800 Series Router', value: 41, key: 41},
      { label: 'Canopy PTP 400', value: 40, key: 40},
      { label: 'Cisco 2948 Series Switch', value: 42, key: 42},
      { label: 'NetGear', value: 23, key: 23},
      { label: 'Netopia 3386', value: 60, key: 60},
      { label: 'Redline AN80', value: 24, key: 24},
      { label: 'Cisco 6500 Series Switch', value: 34, key: 34},
      { label: 'DLB 2700', value: 61, key: 61},
      { label: 'Trango M5800', value: 22, key: 22},
      { label: 'Trango M2400', value: 17, key: 17},
      { label: 'Audiocodes', value: 20, key: 20},
      { label: 'Atlas', value: 4, key: 4},
      { label: 'Cisco 2900 Series Switch', value: 28, key: 28},
      { label: 'BridgeWave 80Ghz', value: 12, key: 12},
      { label: 'Cisco 1800 Series Router', value: 31, key: 31},
      { label: 'Spectra', value: 6, key: 6},
      { label: 'Colubris', value: 19, key: 19},
      { label: 'Cisco 3750 Series Switch', value: 36, key: 36},
      { label: 'Cisco 1700 Series Router', value: 38, key: 38},
      { label: 'Cisco 12000 Series Router', value: 35, key: 35},
      { label: 'Cisco 3560 Series Switch', value: 49, key: 49},
      { label: 'CPE', value: 5, key: 5},
      { label: 'Cisco 4500 Series Switch', value: 64, key: 64},
      { label: 'RAD RICi', value: 54, key: 54},
      { label: 'Ubiquiti Rocket M5', value: 65, key: 65},
      { label: 'Dell Switch', value: 25, key: 25},
      { label: 'Cisco 7600 Series Router', value: 51, key: 51},
      { label: 'Canopy PTP 500', value: 50, key: 50},
      { label: 'Cisco 7300 Series Router', value: 33, key: 33},
      { label: 'Cisco 2600 Series Router', value: 37, key: 37},
      { label: 'ATI Rapier 24i Switch', value: 47, key: 47},
      { label: 'Adaptive Broadband', value: 52, key: 52},
      { label: 'Cisco 3845 Series Router', value: 63, key: 63},
      { label: 'Cisco 4700 Series Router', value: 43, key: 43},
      { label: 'Dragonwave', value: 21, key: 21},
      { label: 'BridgeWave 60Ghz', value: 11, key: 11},
      { label: 'LigoWave 900MHz', value: 45, key: 45},
      { label: 'Cisco 3500 Series Switch', value: 29, key: 29},
      { label: 'Cisco ASA 5510', value: 62, key: 62},
      { label: 'Nortel Baystack 350 Switch', value: 48, key: 48},
      { label: 'Cisco 3640 Series Router', value: 46, key: 46},
      { label: 'Motorola PTP 58400 Lite', value: 55, key: 55},
      { label: 'LigoWave 5GHz', value: 44, key: 44},
      { label: 'Gemini', value: 3, key: 3},
      { label: 'Cisco 7200 Series Router', value: 32, key: 32},
      { label: 'Trango M900', value: 16, key: 16},
      { label: 'Cisco 1900 Series Switch', value: 27, key: 27},
      { label: 'Canopy PTP 600', value: 39, key: 39},
      { label: 'Reignwire', value: 13, key: 13},
      { label: 'Tranzeo TR5a', value: 53, key: 53},
      { label: 'Canopy', value: 2, key: 2},
      { label: 'Wilibox', value: 14, key: 14},
      { label: 'Cisco 3550 Series Switch', value: 30, key: 30},
      { label: '3Com Intellijack', value: 18, key: 18},
      { label: 'Ubiquiti Nanostation M5', value: 66, key: 66},
      { label: 'Cisco 800 Series Router', value: 67, key: 67},
      { label: 'Ceragon', value: 15, key: 15},
      { label: 'Cisco IAD 2400', value: 59, key: 59},
      { label: 'Cisco 2800 Series Router', value: 41, key: 41},
      { label: 'Canopy PTP 400', value: 40, key: 40},
      { label: 'Cisco 2948 Series Switch', value: 42, key: 42},
      { label: 'NetGear', value: 23, key: 23},
      { label: 'Netopia 3386', value: 60, key: 60},
      { label: 'Redline AN80', value: 24, key: 24},
      { label: 'Cisco 6500 Series Switch', value: 34, key: 34},
      { label: 'DLB 2700', value: 61, key: 61},
      { label: 'Trango M5800', value: 22, key: 22},
      { label: 'Trango M2400', value: 17, key: 17},
      { label: 'Audiocodes', value: 20, key: 20},
      { label: 'Atlas', value: 4, key: 4},
      { label: 'Cisco 2900 Series Switch', value: 28, key: 28},
      { label: 'BridgeWave 80Ghz', value: 12, key: 12},
      { label: 'Cisco 1800 Series Router', value: 31, key: 31},
      { label: 'Spectra', value: 6, key: 6},
      { label: 'Colubris', value: 19, key: 19},
      { label: 'Cisco 3750 Series Switch', value: 36, key: 36},
      { label: 'Cisco 1700 Series Router', value: 38, key: 38},
      { label: 'Cisco 12000 Series Router', value: 35, key: 35},
      { label: 'Cisco 3560 Series Switch', value: 49, key: 49},
      { label: 'CPE', value: 5, key: 5},
      { label: 'Cisco 4500 Series Switch', value: 64, key: 64},
      { label: 'RAD RICi', value: 54, key: 54},
      { label: 'Ubiquiti Rocket M5', value: 65, key: 65},
      { label: 'Canopy 900Mhz', value: 10, key: 10},
      { label: 'Dell Switch', value: 25, key: 25}
    ]
  }

  render() {
    return (
      <div style={_.assign(this.style(), this.props.style)}>
        <Paper zDepth={1} rounded={true}>
          <Layout widths={{lg:[12],md:[12],sm:[12],xs:[12]}} pPadding={'0 20px 20px 20px'}>
              <Details
                title = {'Engineering Hardware'}
                data = {[
                  { label: 'POP Router', name: 'pop_router_inventory_type_id', value: <div><DropDown menuItems={this.getRouters()} selectedValue={this.props.popRouterInventoryTypeId} /><Checkbox label={'Configured and Tested'} name={'radios_configured'} defaultChecked={this.props.radiosConfigured}/></div>, detailType: "muiDropDown"},
                  { label: 'Voice CPE', name: 'voice_cpe_inventory_type_id', value: <div><DropDown menuItems={this.getRouters()} selectedValue={this.props.voiceCpeInventoryTypeId} /><Checkbox label={'Configured and Tested'} name={'voice_cpe_configured'} defaultChecked={this.props.voiceCpeConfigured}/></div>, detailType: "muiDropDown"},
                  { label: 'Other Hardware', name: 'other_inventory_type_id', value: <div><DropDown menuItems={this.getRouters()} selectedValue={this.props.otherInventoryTypeId} /><Checkbox label={'Configured and Tested'} name={'other_configured'} defaultChecked={this.props.otherConfigured}/></div>, detailType: "muiDropDown"},
                  { label: 'Voice Handoff Type', name: 'voice_handoff_type', value: <TextField fullWidth={false} multiLine={true} defaultValue={this.props.voiceHandoffType} />, detailType: 'muiTextField' },
                  { label: 'Master Radio MAC', name: 'master_radio_mac', value: <TextField multiLine={true} defaultValue={this.props.masterRadioMac} />, detailType: 'muiTextField' },
                  { label: 'Slave Radio MAC', name: 'slave_radio_mac', value: <TextField multiLine={true} defaultValue={this.props.slaveRadioMac} />, detailType: 'muiTextField' },
                  { label: 'Frequency', name: 'frequency', value: <TextField multiLine={true} defaultValue={this.props.frequency} />, detailType: 'muiTextField' },
                  { label: 'Transeiver Serial Number', name: 'transeiver_serial_number', value: <TextField multiLine={true} defaultValue={this.props.transeiverSerialNumber} />, detailType: 'muiTextField' },
                  { label: 'BTS Serial Number', name: 'bts_serial_number', value: <TextField multiLine={true} defaultValue={this.props.btsSerialNumber} />, detailType: 'muiTextField' },
                  { label: '', name: 'pop_router_ports_assigned', value: <Checkbox label={'POP Router Ports Assigned'} name={'pop_router_ports_assigned'} defaultChecked={this.props.popRouterPortsAssigned} />, detailType: 'muiTextField' },
                  { label: '', name: 'voice_provisioning_complete', value: <Checkbox label={'Voice Provisioning Complete'} name={'voice_provisioning_complete'} defaultChecked={this.props.voiceProvisioningComplete} />, detailType: 'muiTextField' },
                  { label: 'Notes', name: 'hardware_notes', value: <TextField multiLine={true} defaultValue={this.props.hardwareNotes} />, detailType: 'muiTextField' },
                  { label: '', value: <RaisedButton primary label="Update" />, detailType: 'muiButton'}
                ]}
              />
          </Layout>
        </Paper>
      </div>
    );
  }
}

class EngineeringHardware extends React.Component {
  handleSubmit(state) {
    console.log(state);
    // updateWorkOrder({
    //   id: this.props.workOrder.id,
    //   workOrder: _.extend({}, this.props.workOrder, {pop_entry: 'existing', pop_id: this.state.popId})
    // });
  }

  render() {
    return (
      <EngineeringHardwareView  onSubmit={(state) => this.handleSubmit(state)}
                                defaultPopRouterInventoryTypeId={this.props.workOrder.pop_router_inventory_type_id}
                                defaultRadiosConfigured={this.props.workOrder.radios_configured}
                                defaultVoiceCpeInventoryTypeId={this.props.workOrder.voice_cpe_inventory_type_id}
                                defaultVoiceCpeConfigured={this.props.workOrder.voice_cpe_configured}
                                defaultOtherInventoryTypeId={this.props.workOrder.other_inventory_type_id}
                                defaultOtherConfigured={this.props.workOrder.other_configured}
                                defaultVoiceHandoffType={this.props.workOrder.voice_handoff_type}
                                defaultMasterRadioMac={this.props.workOrder.master_radio_mac}
                                defaultSlaveRadioMac={this.props.workOrder.slave_radio_mac}
                                defaultFrequency={this.props.workOrder.frequency}
                                defaultTranseiverSerialNumber={this.props.workOrder.transeiver_serial_number}
                                defaultBtsSerialNumber={this.props.workOrder.bts_serial_number}
                                defaultPopRouterPortsAssigned={this.props.workOrder.pop_router_ports_assigned}
                                defaultVoiceProvisioningComplete={this.props.workOrder.voice_provisioning_complete}
                                defaultHardwareNotes={this.props.workOrder.hardware_notes} />
    );
  }
}

export default EngineeringHardware;
