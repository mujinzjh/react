import React, { Component, Suspense } from 'react'
import router from './index';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppLayout from '../components/layout';

class RouterView extends Component {
  constructor(props: any, content: any) {
    super(props, content);
    this.state = {}
  }
  render() {
    return (
      <>
        <Suspense fallback={<></>}>
          <Router>
            <Switch>
              <Route path={'/'} exact>
                <Redirect to={'/login'}></Redirect>
              </Route>
              <AppLayout>
                {
                  router.map(r => (
                    <Route path={r.path} key={r.key} exact={r.exact}>
                      {r.component}
                    </Route>
                  ))
                }
              </AppLayout>

            </Switch>
          </Router>
        </Suspense>
      </>
    )
  }
}
export default RouterView