POC conclusions:

ComponentWillMount => Before constructor and render method this method called first time only. not in rerender time.
ComponentDidMount   => After render method and child render method it's calling once.
ComponentDidUpdate  => Whenever state or porps updating from parent or myself it's calling. parameter it's has previous value.
shouldComponentUpdate => Is very interesting Each props or state update this method trigger and it will decide the newValue     
                        should re-render or not based on the return value


# How to Run this Project
    Before start the project run json server from src>data> json-server --watch application_data.json
    > npm i
    >npm start
