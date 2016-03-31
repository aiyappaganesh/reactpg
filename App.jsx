const { AppBar, IconButton, IconMenu, LeftNav, SelectField, TextField, RaisedButton, FloatingActionButton, Card, CardActions, CardHeader, CardText } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert, ContentAdd } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

const buttonStyle = {
  margin: 12,
};

const actionButtonStyle = {
  marginRight: 20,
};

const jobs = [
  <MenuItem value={'#1234'} primaryText="#1234"/>,
  <MenuItem value={'#2345'} primaryText="#2345"/>,
  <MenuItem value={'#3456'} primaryText="#3456"/>,
  <MenuItem value={'#4567'} primaryText="#4567"/>,
  <MenuItem value={'#5678'} primaryText="#5678"/>
];

const services = [
  <MenuItem value={'Mid Sized Business Plus Package'} primaryText="Mid Sized Business Plus Package"/>,
  <MenuItem value={'Small Business Basics'} primaryText="Small Business Basics"/>,
  <MenuItem value={'Home Essentials Package'} primaryText="Home Essentials Package"/>,
  <MenuItem value={'Enterprise Economy Bundle'} primaryText="Enterprise Economy Bundle"/>,
  <MenuItem value={'Diamond Enterprise Bundle'} primaryText="Diamond Enterprise Bundle"/>,
  <MenuItem value={'Mid Sized Business Package'} primaryText="Mid Sized Business Package"/>
];

const issueTypes = [
  <MenuItem value={'installation'} primaryText="Installation"/>,
  <MenuItem value={'repair/maintenance'} primaryText="Repair/Maintenance"/>,
  <MenuItem value={'replacement'} primaryText="Replacement"/>,
  <MenuItem value={'delivery'} primaryText="Delivery"/>,
  <MenuItem value={'meter reading'} primaryText="Meter Reading"/>,
  <MenuItem value={'estimate/inspection'} primaryText="Estimate/Inspection"/>
];

const engineers = [
  <MenuItem value={'110257721827374623737'} primaryText="Joe"/>,
  <MenuItem value={'117685299168782698970'} primaryText="Josephine"/>,
  <MenuItem value={'101967792556257735208'} primaryText="Jeremy"/>,
  <MenuItem value={'103387629180365578874'} primaryText="Jhon"/>,
  <MenuItem value={'101447084593147265288'} primaryText="James"/>,
  <MenuItem value={'102417683683083682579'} primaryText="Jenny"/>,
  <MenuItem value={'115781491509522514753'} primaryText="Jeff"/>,
  <MenuItem value={'105193078925726528104'} primaryText="Jason"/>,
  <MenuItem value={'109061817072269062716'} primaryText="Jenna"/>
];

const customers = [
  <MenuItem value={'103764585826277201640'} primaryText="Rick"/>,
  <MenuItem value={'108560908635605545932'} primaryText="Robert"/>,
  <MenuItem value={'102345940077083980832'} primaryText="Ryan"/>,
  <MenuItem value={'107612119418245526899'} primaryText="Rachel"/>,
  <MenuItem value={'108612246962932756480'} primaryText="Rose"/>
];

const experts = [
  <MenuItem value={'112739138406530779564'} primaryText="TWC"/>,
  <MenuItem value={'110132770680215220078'} primaryText="Cisco"/>,
  <MenuItem value={'108741317245837764468'} primaryText="Verizon"/>,
  <MenuItem value={'112043759976089842597'} primaryText="Belkin"/>,
  <MenuItem value={'103675625919779944270'} primaryText="Apple"/>,
  <MenuItem value={'118014758899268715696'} primaryText="Netgear"/>
];

const job_id_map = {
  '#1234':{'location':{'addr':'300 Madison Ave, New York, NY 10016', 'lat':'40.752896', 'lon':'-73.9822427'},'issue':{'type':'repair/maintenance'}, 'equipments':['Widget Box 2', 'Analyzer A', 'Monitor Plus 1.0', 'Toolkit Z'], 'services':['Mid Sized Business Plus Package'], 'engineer':{'id':'110257721827374623737', 'name':'Joe'}, 'customer':{'id':'103764585826277201640', 'name':'Rick'}, 'notes':["The main unit is located in the basement and requires a landlord's approval to enter.", "Customer is tech-savvy and independent. Customer knows a lot about the services and wants to understand what the field techs are doing and why they are doing it."], 'documents':['Cisco manual :: http://www.cisco.com/c/dam/en/us/td/docs/routers/csbr/wrv54g/user/guide/wrv54g_ug.pdf', 'Router troubleshooting Doc :: https://docs.google.com/document/d/19-UiF6HSXfwPHfEZs_XlFl21fE4aEG46r48fmQyl-5c/edit']},
  '#2345':{'location':{'addr':'823 11th Ave, New York, NY 10019, USA', 'lat':'40.770048', 'lon':'-73.992164'},'issue':{'type':'installation'}, 'equipments':['Machine 2', 'Analyzer A', 'Monitor Plus 1.0', 'Apparatus v2'], 'services':['Small Business Basics'], 'engineer':{'id':'110257721827374623737', 'name':'Joe'}, 'customer':{'id':'108560908635605545932', 'name':'Robert'}, 'notes':["The main unit is located in the basement and requires a landlord's approval to enter.", "Customer is tech-savvy and independent. Customer knows a lot about the services and wants to understand what the field techs are doing and why they are doing it."], 'documents':['Cisco manual :: http://www.cisco.com/c/dam/en/us/td/docs/routers/csbr/wrv54g/user/guide/wrv54g_ug.pdf', 'Router troubleshooting Doc :: https://docs.google.com/document/d/19-UiF6HSXfwPHfEZs_XlFl21fE4aEG46r48fmQyl-5c/edit']},
  '#3456':{'location':{'addr':'445 W 59th St, New York, NY 10019, USA', 'lat':'40.770288', 'lon':'-73.986705'},'issue':{'type':'repair/maintenance'}, 'equipments':['Machine 1', 'Toolkit A3'], 'services':['Home Essentials Package'], 'engineer':{'id':'110257721827374623737', 'name':'Joe'}, 'customer':{'id':'102345940077083980832', 'name':'Ryan'}, 'notes':["The main unit is located in the basement and requires a landlord's approval to enter.", "Customer is tech-savvy and independent. Customer knows a lot about the services and wants to understand what the field techs are doing and why they are doing it."], 'documents':['Cisco manual :: http://www.cisco.com/c/dam/en/us/td/docs/routers/csbr/wrv54g/user/guide/wrv54g_ug.pdf', 'Router troubleshooting Doc :: https://docs.google.com/document/d/19-UiF6HSXfwPHfEZs_XlFl21fE4aEG46r48fmQyl-5c/edit']},
  '#4567':{'location':{'addr':'665 5th Ave, New York, NY 10022, USA', 'lat':'40.760084', 'lon':'-73.975604'},'issue':{'type':'repair/maintenance'}, 'equipments':['Appliance 1', 'Toolkit X', "10' Cables"], 'services':['Enterprise Economy Bundle'], 'engineer':{'id':'110257721827374623737', 'name':'Joe'}, 'customer':{'id':'107612119418245526899', 'name':'Rachel'}, 'notes':["The main unit is located in the basement and requires a landlord's approval to enter.", "Customer is tech-savvy and independent. Customer knows a lot about the services and wants to understand what the field techs are doing and why they are doing it."], 'documents':['Cisco manual :: http://www.cisco.com/c/dam/en/us/td/docs/routers/csbr/wrv54g/user/guide/wrv54g_ug.pdf', 'Router troubleshooting Doc :: https://docs.google.com/document/d/19-UiF6HSXfwPHfEZs_XlFl21fE4aEG46r48fmQyl-5c/edit']},
  '#5678':{'location':{'addr':'524 Park Ave, New York, NY 10065, USA', 'lat':'40.763868', 'lon':'-73.969638'},'issue':{'type':'estimate/inspection'}, 'equipments':['Appliance Model 2', 'Tracker Module', 'Receipt Pad'], 'services':['Diamond Enterprise Bundle'], 'engineer':{'id':'110257721827374623737', 'name':'Joe'}, 'customer':{'id':'108612246962932756480', 'name':'Rose'}, 'notes':["The main unit is located in the basement and requires a landlord's approval to enter.", "Customer is tech-savvy and independent. Customer knows a lot about the services and wants to understand what the field techs are doing and why they are doing it."], 'documents':['Cisco manual :: http://www.cisco.com/c/dam/en/us/td/docs/routers/csbr/wrv54g/user/guide/wrv54g_ug.pdf', 'Router troubleshooting Doc :: https://docs.google.com/document/d/19-UiF6HSXfwPHfEZs_XlFl21fE4aEG46r48fmQyl-5c/edit']}
}

// App component - represents the whole app
App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  },
 
  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  createCircle(name) {
    console.log(name);
    HTTP.call('POST', 'https://www.googleapis.com/plusDomains/v1/people/me/circles?access_token=ya29.swKdcq13OSvvo5cYN6vYfHlUuwUI9qJ5I5QZuQP1ViubzBTG2q6wfMc8vvkjseecjQ', {data: {'displayName': name} }, function(error, response) {
      console.log(response);
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var fname = React.findDOMNode(this.refs.textInput1).value.trim();
    var lname = React.findDOMNode(this.refs.textInput2).value.trim();
 
    var id = Tasks.insert({
      text: fname+' '+lname,
      createdAt: new Date() // current time
    });
     
     // Clear form
    var inputs = document.getElementsByTagName('input');
    for (var i = inputs.length - 1; i >= 0; i--) {
      inputs[i].value = "";
    };
  },

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },
 
  getInitialState() {
    return {
      job_id: -1,
      issue_type: -1,
      service: -1,
      engineer: -1,
      customer: -1,
      location: ''
    };
  },
 
  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  handleJobChange(event, index, value) {
    this.setState({job_id: value});
    this.clearForm();
    job_deets = job_id_map[value];
    console.log(job_deets);
    console.log('set geo-location');
    //codeAddress();
    console.log('coded address');
    this.setState(
      {
        issue_type: job_deets.issue.type,
        service: job_deets.services[0],
        engineer: job_deets.engineer.id,
        customer: job_deets.customer.id,
        location: job_deets.location.addr
      }
    );
    console.log('set issue-type');
    $('#issue-type').change();
    console.log('changed issue-type');
    //addItemsFor('equipments', job_deets.equipments);
    //addItemsFor('customernotes', job_deets.notes);
    //circleParameterChanged();
    //addItemsFor('ticketdocuments', job_deets.documents);
  },

  handleLocationChange(event, index, value) {
    this.setState({location: value});
  },

  handleIssueTypeChange(event, index, value) {
    this.setState({issue_type: value});
  },

  handleServiceChange(event, index, value) {
    this.setState({service: value});
  },

  handleEngineerChange(event, index, value) {
    this.setState({engineer: value});
  },

  handleCustomerChange(event, index, value) {
    this.setState({customer: value});
  },

  clearForm() {

  },
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-7 options-section">
            <h1>Enter ticket parameters</h1>
              <form className="new-task" onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <SelectField hintText="Select Job ID" floatingLabelText="Job ID:" ref="job-id" id="job-id" value={this.state.job_id}
          onChange={this.handleJobChange}>
                    {jobs}
                  </SelectField>
                </div>
                <div className="form-group">
                  <SelectField hintText="Select Issue Type" floatingLabelText="Issue type:" ref="issue-type" id="issue-type" value={this.state.issue_type}
          onChange={this.handleIssueTypeChange}>
                    {issueTypes}
                  </SelectField>
                </div>
                <div className="form-group">
                  <TextField
                    hintText="Job Location"
                    floatingLabelText="Job Location:"
                    ref="geo-location" id="geo-location"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                  />
                </div>
                
                <div className="form-group">
                  <Card>
                    <CardHeader
                      title="Equipments involved"
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText ref="equipments" id="equipments" expandable={true}>
                      <div className="itemslist">
                      </div>
                    </CardText>
                    <CardActions expandable={true}>
                      <TextField
                        hintText="Equipment"
                        floatingLabelText="Equipment:"
                        ref="equipment" id="equipment"
                      />
                      <FloatingActionButton mini={true} style={actionButtonStyle} ref="add-equipment" id="add-equipment">
                        <ContentAdd />
                      </FloatingActionButton>
                    </CardActions>
                  </Card>
                </div>
                <div className="form-group">
                  <SelectField hintText="Select Service Type" floatingLabelText="Service:" ref="service" id="service" value={this.state.service}
          onChange={this.handleServiceChange}>
                    {services}
                  </SelectField>
                </div>
                <div className="form-group">
                  <SelectField hintText="Select Engineer" floatingLabelText="Engineer:" ref="engineer" id="engineer" value={this.state.engineer}
          onChange={this.handleEngineerChange}>
                    {engineers}
                  </SelectField>
                </div>
                <div className="form-group">
                  <SelectField hintText="Select Customer" floatingLabelText="Customer:" ref="customer" id="customer" value={this.state.customer}
          onChange={this.handleCustomerChange}>
                    {customers}
                  </SelectField>
                </div>
                <div className="form-group">
                  <Card>
                    <CardHeader
                      title="Issue notes"
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText ref="customernotes" id="customernotes" expandable={true}>
                      <div className="itemslist">
                      </div>
                    </CardText>
                    <CardActions expandable={true}>
                      <TextField
                        hintText="New Note"
                        floatingLabelText="New Note:"
                        ref="notes" id="notes"
                      />
                      <FloatingActionButton mini={true} style={actionButtonStyle} ref="add-customer-note" id="add-customer-note">
                        <ContentAdd />
                      </FloatingActionButton>
                    </CardActions>
                  </Card>
                </div>
                <div className="form-group">
                  <Card>
                    <CardHeader
                      title="Ticket documents"
                      actAsExpander={true}
                      showExpandableButton={true}
                    />
                    <CardText ref="ticketdocuments" id="ticketdocuments" expandable={true}>
                      <div className="itemslist">
                      </div>
                      <input type="hidden" className="form-control item" ref="ticketdocument" id="ticketdocument"/>
                    </CardText>
                    <CardActions expandable={true}>
                      <TextField
                        hintText="Name"
                        floatingLabelText="Name:"
                        ref="ticketdocument-name" id="ticketdocument-name"
                      />
                      <TextField
                        hintText="URL"
                        floatingLabelText="URL:"
                        ref="ticketdocument-url" id="ticketdocument-url"
                      />
                      <FloatingActionButton mini={true} style={actionButtonStyle} ref="add-ticket-document" id="add-ticket-document">
                        <ContentAdd />
                      </FloatingActionButton>
                    </CardActions>
                  </Card>
                </div>
                <RaisedButton
                label="Submit"
                style={buttonStyle}
                ref="submit" id="submit"
                />
              </form>
          </div>
          <div className="col-xs-5 circles-section">
          </div>
        </div>
        {/*<ul>
          {this.renderTasks()}
        </ul>*/}
      </div>
    );
  }
});