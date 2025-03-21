import React, {useRef} from "react";

export function CustomTextInput()
{
  const textInput = useRef(null);
  function focusTextInput() {
    textInput.current.focus();
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button"  value="Фокус на текстовом поле"  onClick={focusTextInput}/>
    </div>
  );
}

/*export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef(); // int & textinput
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();
  }

  render() {
    // описываем, что мы хотим связать реф <input>
    // с `textInput` созданным в конструкторе
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button"  value="Фокус на текстовом поле"  onClick={this.focusTextInput}
        />
      </div>
    );
  }
}*/