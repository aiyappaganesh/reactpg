const { AppBar, IconButton, IconMenu, LeftNav, SelectField, TextField, RaisedButton, FloatingActionButton } = mui;
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
      customer: -1
    };
  },
 
  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  handleJobChange(event, index, value) {
    this.setState({job_id: value});
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
                  />
                </div>
                
                <div className="form-group">
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                        <a data-toggle="collapse" href="#equipments">Equipments involved</a>
                        </h4>
                      </div>
                      <div ref="equipments" id="equipments" className="panel-collapse collapse">
                        <div className="itemslist">
                        </div>
                        <TextField
                          hintText="Equipment"
                          floatingLabelText="Equipment:"
                          ref="equipment" id="equipment"
                        />
                        <FloatingActionButton mini={true} style={actionButtonStyle} ref="add-equipment" id="add-equipment">
                          <ContentAdd />
                        </FloatingActionButton>
                      </div>
                    </div>
                  </div>
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
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                        <a data-toggle="collapse" href="#customernotes">Issue notes</a>
                        </h4>
                      </div>
                      <div ref="customernotes" id="customernotes" className="panel-collapse collapse">
                        <div className="itemslist">
                        </div>
                        <TextField
                          hintText="New Note"
                          floatingLabelText="New Note:"
                          ref="notes" id="notes"
                        />
                        <FloatingActionButton mini={true} style={actionButtonStyle} ref="add-customer-note" id="add-customer-note">
                          <ContentAdd />
                        </FloatingActionButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                        <a data-toggle="collapse" href="#ticketdocuments">Ticket documents</a>
                        </h4>
                      </div>
                      <div ref="ticketdocuments" id="ticketdocuments" className="panel-collapse collapse">
                        <div className="itemslist"></div>
                        <input type="hidden" className="form-control item" ref="ticketdocument" id="ticketdocument"/>
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
                      </div>
                    </div>
                  </div>
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