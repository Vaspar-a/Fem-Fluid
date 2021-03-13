import React, { Component } from "react";
import "./input.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.refers = {
      input: React.createRef(),
      error: React.createRef(),
      detail: React.createRef(),
      tooltip: React.createRef(),
    };

    this.state = {
      value: "",
      type: "text", 
    };

    this.handleChange = this.handleChange.bind(this);
    this.onTooltipChange = this.onTooltipChange.bind(this);
    this.onDetailChange = this.onDetailChange.bind(this);
    this.onErrorChange = this.onErrorChange.bind(this);
    this.onPatternChange = this.onPatternChange.bind(this);
    this.onInputTypeChange = this.onInputTypeChange.bind(this);
    this.showError = this.showError.bind(this);
  }

  componentDidMount() {
      this.onTooltipChange();
      this.onDetailChange();
      this.onErrorChange();
      this.onInputTypeChange();
  }

  onTooltipChange() {
    const tooltipText = this.props.tooltip;
    if (tooltipText !== undefined && tooltipText.trim() !== "") {
      this.refers.tooltip.current.textContent = tooltipText;
      this.refers.tooltip.current.style.padding = '0.25rem';
    }
  }

  onPatternChange() {
    const pattern = this.props.pattern;
    if (pattern !== undefined && pattern.trim() !== "") {
      this.showError(pattern);
    }
  }

  onDetailChange() {
    const detailText = this.props.detail;
    if (detailText !== undefined && detailText.trim() !== "") {
      this.refers.detail.current.textContent = detailText;
      this.refers.detail.current.style.display = "inline-block";
    } 
  }

  onErrorChange() {
    const errorText = this.props.error;
    if (errorText !== undefined && errorText.trim() !== "") {
      this.refers.error.current.textContent = errorText;
    }
  }

  showError(event) {
    event.stopPropagation();
    if (this.pattern !== undefined) {
        let regex = RegExp(this.pattern);
        let inputText = this.state.value;
        console.log(regex.test(inputText));
          if (!regex.test(inputText)) {
            this.refers.error.current.style.display = "inline-block";
          } else {
            this.refers.error.current.style.display = "none";
          }
      }
  }
  
  handleChange(event) {
    event.stopPropagation();
    this.setState({ value: event.target.value });
  }

  onInputTypeChange() {
    // this.input.type = this.getAttribute("type") || "text";
    const type = this.props.type;
    if (type === "email") {
      this.pattern = `^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`;
      this.setState({type: "email"});
    } else if (type === "tel") {
      this.pattern = "^[0-9]{10}$";
      this.setState({type: "tel"});
    } else if (type === "url") {
      this.pattern =
        "[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)";
      this.setState({type: "url"});
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="input-container">
            <input
              value={this.state.value}
              ref={this.refers.input}
              className="input"
              type={this.state.type}
              onChange={this.handleChange}
              onBlur={this.showError}
            />
            <span className="tooltip" ref={this.refers.tooltip}></span>
            <i className="img" part="img" src=""></i>
          </div>
          <span className="detail" ref={this.refers.detail}></span>
          <span className="error" ref={this.refers.error}></span>
        </div>
      </div>
    );
  }
}
