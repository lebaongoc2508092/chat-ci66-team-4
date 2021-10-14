class InputGroup {
  $container = document.createElement("div");
  $label = document.createElement("label");
  $input = document.createElement("input");
  $errMessage = document.createElement("div");

  constructor(label, inputType, placeholderTxt) {
    this.$label.innerHTML = label;
    this.$input.type = inputType;
    this.$input.placeholder = placeholderTxt;

    this.$input.classList.add("inputLogin");
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$input);
    this.$container.appendChild(this.$errMessage);
    this.$errMessage.classList.add("errInvalid")
  }
  getValue = () => {
    return this.$input.value;
  }
  setErrorMessage = (errMsg) => {
    this.$errMessage.innerHTML = errMsg;
  };
}

export { InputGroup };
