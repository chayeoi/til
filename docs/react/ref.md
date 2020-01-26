# Ref에 대해 잘 몰랐던 사실 몇 가지

When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
You may not use the ref attribute on function components because they don’t have instances.
The examples below demonstrate the differences.

Adding a Ref to a DOM Element
This code uses a ref to store a reference to a DOM node:

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.

ref로 자식 컴포넌트의 state에 접근할 수도 있다.

Refs and Function Components
You may not use the ref attribute on function components because they don’t have instances:

function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}
You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.

You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component:

function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}

Exposing DOM Refs to Parent Components
In rare cases, you might want to have access to a child’s DOM node from a parent component. This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.

While you could add a ref to the child component, this is not an ideal solution, as you would only get a component instance rather than a DOM node. Additionally, this wouldn’t work with function components.

If you use React 16.3 or higher, we recommend to use ref forwarding for these cases. Ref forwarding lets components opt into exposing any child component’s ref as their own. You can find a detailed example of how to expose a child’s DOM node to a parent component in the ref forwarding documentation.

If you use React 16.2 or lower, or if you need more flexibility than provided by ref forwarding, you can use this alternative approach and explicitly pass a ref as a differently named prop.

When possible, we advise against exposing DOM nodes, but it can be a useful escape hatch. Note that this approach requires you to add some code to the child component. If you have absolutely no control over the child component implementation, your last option is to use findDOMNode(), but it is discouraged and deprecated in StrictMode.
