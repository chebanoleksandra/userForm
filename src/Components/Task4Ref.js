import React, { useRef } from "react";

export function FileInput()
{
  const fileInput = useRef(null);
  function handleSubmit(e) {
    alert(`Selected file - ${fileInput.current.files[0].name}`);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

/*export class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();

  }
  handleSubmit(event) {

    alert(`Selected file - ${this.fileInput.current.files[0].name}`);

    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}*/


