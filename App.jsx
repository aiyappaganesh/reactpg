const { AppBar, IconButton, IconMenu, LeftNav, SelectField, TextField } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

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
  <MenuItem value={'#1234'} primaryText="#1234"/>
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
      issue_type: -1
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
                    {jobs}
                  </SelectField>
                </div>
                <div className="form-group">
                  <TextField
                    hintText="Job Location"
                    floatingLabelText="Job Location:"
                    ref="geo-location" id="geo-location"
                  /><br/>
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
                        <label for="equipment">Equipment:</label>
                        <input type="text" className="form-control item" ref="equipment" id="equipment"/>
                        <button className="add-item-button btn btn-default" ref="add-equipment" id="add-equipment">Add Equipment</button>
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
                  <label for="engineer">Engineer:</label>
                  <select className="form-control" ref="engineer" id="engineer">
                    <option value="-1">Select Engineer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="customer">Customer:</label>
                  <select className="form-control" ref="customer" id="customer">
                    <option value="-1">Select Customer</option>
                  </select>
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
                        <label for="notes">New note:</label>
                        <textarea className="form-control item" rows="5" ref="notes" id="notes"></textarea>
                        <button className="add-item-button btn btn-default circle-parameter" ref="add-customer-note" id="add-customer-note">Add Note</button>
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
                        <label for="document">Name:</label>
                        <input type="text" className="form-control item-part" ref="ticketdocument-name" id="ticketdocument-name" onchange="$('#ticketdocument').val($('#ticketdocument-name').val()+' :: '+$('#ticketdocument-url').val());"/>
                        <label for="document">URL:</label>
                        <input type="text" className="form-control item-part" ref="ticketdocument-url" id="ticketdocument-url" onchange="$('#ticketdocument').val($('#ticketdocument-name').val()+' :: '+$('#ticketdocument-url').val());"/>
                        <input type="hidden" className="form-control item" ref="ticketdocument" id="ticketdocument"/>
                        <button className="add-item-button btn btn-default" ref="add-ticket-document" id="add-ticket-document">Add Document</button>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  ref="submit"
                  id="submit"
                  value="Submit" />
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