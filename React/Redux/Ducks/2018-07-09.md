# Ducks Pattern

The problem I have with “ducks” is it groups action creators together with reducers, thus often making people assume those map one to one. One of the strengths of Redux (and Flux) is that distant parts of the state may update in response to the same action. Putting action creators with reducers make it seem like actions are local to the module, and “snooping” on actions from another module is an anti-pattern, but this just isn’t true. - Dan Abramov
