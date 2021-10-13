class InputGroup {
  $container = document.createElement("div");
  $label = document.createElement("label");
  $input = document.createElement("input");

  constructor(label, inputType, placeholderTxt) {
    this.$label.innerHTML = label;
    this.$input.type = inputType;
    this.$input.placeholder = placeholderTxt;
    this.$input.classList.add("inputLogin") 
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$input);
  }
}

export { InputGroup };