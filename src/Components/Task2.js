import React from "react";

export function EssayForm(props) {
  const [value, setState] = React.useState('Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.')

  function handleChange(event) {
    setState(event.target.value);
  }

  function handleSubmit(event) {
    if ( event.target.length<5) {
      event.preventDefault();
    }
    else {
      alert('Сочинение отправлено: ' + value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Сочинение:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}
/*В React <textarea> использует атрибут value!!
инициализация  this.state.value в конструкторе, так что в текстовой области изначально есть текст.
 
*/