import { Route } from "react-router";

const Welcome = () => {
    return (
        <section>
            <h1> welcome page</h1>
            <Route path="/welcome/su">
                {'hos geldin su'}
            </Route>
        </section>
    )
};
 export default Welcome;