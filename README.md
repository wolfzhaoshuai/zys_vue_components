# zys_vue_components
Show examples that how to write your own reuseable vue componets

## Note
When authoring components, it’s good to keep in mind whether you intend to reuse it somewhere else later.It’s OK for one-off components to be tightly coupled, but reusable components should define a clean public interface and make no assumptions about the context it’s used in.

## Template
The API for a Vue component comes in three parts - props, events, and slots:
 - Props allow the external environment to pass data into the component
 - Events allow the component to trigger side effects in the external environment
 - Slots allow the external environment to compose the component with extra content.
With the dedicated shorthand syntaxes for v-bind and v-on, the intents can be clearly and succinctly conveyed in the template:
```
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat"
>
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
```
