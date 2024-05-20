import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Booking from "./components/booking/Booking"
import Intro from "./components/intro/Intro"
import PaymentList from "./components/common/components/PaymentList"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/booking' component={Booking} />
          <Route exact path='/intro' component={Intro} />
          <Route exact path='/paymentlist' component={PaymentList} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
